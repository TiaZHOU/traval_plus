const getElementById = (id, elementList) => {
    return elementList.find(element => element.id === id);
};

const getIndexById = (id, elementList) => {
    return elementList.findIndex(element => element.id === id);
};

const createElement = (queryArgs, elementList) => {
    if (queryArgs.hasOwnProperty('taskName') && queryArgs.hasOwnProperty('taskDate')) {
        return {
            'id': String(elementList.length + 1),
            'taskName': queryArgs.taskName,
            'taskDate': queryArgs.taskDate,
            'isDone': queryArgs.isDone
        };
    } else {
        return false;
    }
};

const updateElement = (id, queryArgs, elementList) => {
    const elementIndex = getIndexById(id, elementList);
    if (elementIndex === -1) {
        throw new Error('updateElement must be called with a valid id parameter');
    }
    Object.assign(elementList[elementIndex], queryArgs);
    return elementList[elementIndex];
};

module.exports = {
    createElement: createElement,
    getIndexById: getIndexById,
    getElementById: getElementById,
    updateElement: updateElement
};