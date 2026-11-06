"""
server.py — Serveur backend EduGenius en pur Python (standard library).
Fournit :
1. Un serveur HTTP pour servir les fichiers statiques (HTML, CSS, JS).
2. Une API REST interactive (/api/run-python) pour exécuter du code Python en temps réel.
3. Une API d'aide aux devoirs et exercices du Sénégal (/api/solve).
"""

import http.server
import socketserver
import json
import io
import sys
import os
import math
import traceback

PORT = 8000
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

class EduGeniusHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def do_POST(self):
        if self.path == '/api/run-python':
            self.handle_run_python()
        elif self.path == '/api/solve':
            self.handle_solve()
        else:
            self.send_error(404, "Endpoint introuvable")

    def handle_run_python(self):
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length).decode('utf-8')
        try:
            payload = json.loads(post_data)
            code = payload.get('code', '')
        except Exception as e:
            self.send_json_response({'error': 'JSON invalide', 'details': str(e)}, status=400)
            return

        # Redirection stdout et stderr
        old_stdout = sys.stdout
        old_stderr = sys.stderr
        redirected_output = io.StringIO()
        redirected_error = io.StringIO()
        sys.stdout = redirected_output
        sys.stderr = redirected_error

        # Environnement d'exécution sécurisé pour les élèves
        safe_globals = {
            '__builtins__': {
                'print': print,
                'range': range,
                'len': len,
                'int': int,
                'float': float,
                'str': str,
                'list': list,
                'dict': dict,
                'set': set,
                'tuple': tuple,
                'bool': bool,
                'min': min,
                'max': max,
                'sum': sum,
                'abs': abs,
                'round': round,
                'sorted': sorted,
                'enumerate': enumerate,
                'zip': zip,
                'map': map,
                'filter': filter,
            },
            'math': math
        }

        success = True
        try:
            exec(code, safe_globals)
        except Exception:
            success = False
            traceback.print_exc(file=redirected_error)
        finally:
            sys.stdout = old_stdout
            sys.stderr = old_stderr

        output = redirected_output.getvalue()
        errors = redirected_error.getvalue()

        self.send_json_response({
            'success': success,
            'stdout': output,
            'stderr': errors
        })

    def handle_solve(self):
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length).decode('utf-8')
        try:
            payload = json.loads(post_data)
            topic = payload.get('topic', '')
            params = payload.get('params', {})
        except Exception:
            self.send_json_response({'error': 'Paramètres invalides'}, status=400)
            return

        res = {}
        if topic == 'second_degre':
            # Résolution ax² + bx + c = 0 (Programme Seconde & Première S Sénégal)
            try:
                a = float(params.get('a', 1))
                b = float(params.get('b', 0))
                c = float(params.get('c', 0))
                delta = b**2 - 4*a*c
                res['delta'] = delta
                if a == 0:
                    res['explication'] = "Ce n'est pas une équation du 2nd degré car a = 0."
                elif delta > 0:
                    x1 = (-b - math.sqrt(delta)) / (2*a)
                    x2 = (-b + math.sqrt(delta)) / (2*a)
                    res['solutions'] = [round(x1, 4), round(x2, 4)]
                    res['explication'] = f"Δ = {delta} > 0 : deux solutions réelles distinctes x₁ = {round(x1, 4)} et x₂ = {round(x2, 4)}."
                elif delta == 0:
                    x0 = -b / (2*a)
                    res['solutions'] = [round(x0, 4)]
                    res['explication'] = f"Δ = 0 : une solution double réelle x₀ = {round(x0, 4)}."
                else:
                    res['solutions'] = []
                    res['complexes'] = [f"{-b/(2*a):.2f} - {math.sqrt(-delta)/(2*a):.2f}i", f"{-b/(2*a):.2f} + {math.sqrt(-delta)/(2*a):.2f}i"]
                    res['explication'] = f"Δ = {delta} < 0 : aucune solution dans IR. Deux solutions complexes conjuguées dans C (Terminale S)."
            except Exception as e:
                res['error'] = str(e)

        elif topic == 'energie_cinetique':
            # Ec = 1/2 m v² (BFEM & 1ère S)
            try:
                m = float(params.get('m', 1))
                v = float(params.get('v', 0))
                ec = 0.5 * m * (v ** 2)
                res['ec_joules'] = round(ec, 4)
                res['explication'] = f"Pour m = {m} kg et v = {v} m/s, l'énergie cinétique est Ec = ½ × {m} × ({v})² = {round(ec, 4)} Joules."
            except Exception as e:
                res['error'] = str(e)

        self.send_json_response(res)

    def send_json_response(self, data, status=200):
        body = json.dumps(data).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), EduGeniusHandler) as httpd:
        print(f"[EduGenius] Serveur en ligne sur http://localhost:{PORT}")
        print("[EduGenius] Moteur d'execution Python actif (/api/run-python)")
        httpd.serve_forever()
