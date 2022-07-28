

function getId(key) {
    let id = localStorage.getItem(key + "_id");
    if (id === null) {
        localStorage.setItem(key + '_id', 1)
        return 1;
    }
    id = parseInt(id);
    id++
    localStorage.setItem(key + '_id', id);
    return id;
}

function getFrom(key) {
    const data = localStorage.getItem(key);
    if (data === null) {
        localStorage.setItem(key, JSON.stringify([]))
        return [];
    }
    return JSON.parse(data);
}

export function create(key, data) {
    const oldData = getFrom(key);
    const newData = { ...data, id: getId(key) }
    oldData.push(newData)
    localStorage.setItem(key, JSON.stringify(oldData));
}

export function read(key) {
    return getFrom(key)
}

export function update(key, data, id) {
    let oldData = getFrom(key)
    oldData = oldData.filter(d => d.id !== id);
    const newData = { ...data, id: id };
    oldData.push(newData)
    localStorage.setItem(key, JSON.stringify(oldData));
}
export function destroy(key, id) {
    let oldData = getFrom(key)
    oldData = oldData.filter(d => d.id !== id);
    localStorage.setItem(key, JSON.stringify(oldData));
}