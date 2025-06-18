from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import time
import subprocess

class ChangeHandler(FileSystemEventHandler):
    def __init__(self):
        self.last_event = 0

    def on_modified(self, event):
        now = time.time()
        if event.src_path.endswith("app.py") and now - self.last_event > 0.5:
            self.last_event = now
            print("app.py changed! Running...\n---")
            try:
                result = subprocess.run(["python", "app.py"], capture_output=True, text=True)
                print(result.stdout or "(no output)")
                if result.stderr:
                    print("⚠️ ERROR:\n" + result.stderr)
            except Exception as e:
                print(f"🔥 Failed to run app.py: {e}")
            print("---")

if __name__ == "__main__":
    path = "."
    event_handler = ChangeHandler()
    observer = Observer()
    observer.schedule(event_handler, path, recursive=False)
    observer.start()

    print("👀 Watching for changes to app.py...")
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
