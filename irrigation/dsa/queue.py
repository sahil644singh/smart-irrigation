from collections import deque

class SensorDataQueue:
    def __init__(self):
        self.queue = deque()

    def enqueue(self, data):
        self.queue.append(data)

    def dequeue(self):
        if self.queue:
            return self.queue.popleft()
        return None

    def peek(self):
        return self.queue[0] if self.queue else None
