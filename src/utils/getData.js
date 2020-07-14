async function getProvinces() {
    return await fetch('/api/local');
}

async function getDetail(id) {
    return await fetch(`/api/local?parentId=${id}`);
}

export { getProvinces, getDetail }