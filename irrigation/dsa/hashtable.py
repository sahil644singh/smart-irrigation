class HashTable:
    def __init__(self):
        self.table = {}

    def set(self, key, value):
        self.table[key] = value

    def get(self, key):
        return self.table.get(key)
