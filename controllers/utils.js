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

const createPostElement = (queryArgs, elementList) => {
    if (queryArgs.hasOwnProperty('title') && queryArgs.hasOwnProperty('content') &&
        queryArgs.hasOwnProperty('first_name') && queryArgs.hasOwnProperty('last_name') &&
        queryArgs.hasOwnProperty('date'))  {
        return {
            'id': String(elementList.length + 1),
            'title': queryArgs.title,
            'content': queryArgs.content,
            'first_name': queryArgs.first_name,
            'last_name': queryArgs.last_name,
            'date': queryArgs.date
        };
    } else {
        return false;
    }
};

const createCommentElement = (queryArgs, elementList) => {
    if (queryArgs.hasOwnProperty('post') && queryArgs.hasOwnProperty('comment') &&
        queryArgs.hasOwnProperty('first_name') && queryArgs.hasOwnProperty('last_name') &&
        queryArgs.hasOwnProperty('date')) {
        return {
            'id': String(elementList.length + 1),
            'post': queryArgs.post,
            'comment': queryArgs.comment,
            'first_name': queryArgs.first_name,
            'last_name': queryArgs.last_name,
            'date': queryArgs.date
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
    createCommentElement: createCommentElement,
    createPostElement: createPostElement,
    getIndexById: getIndexById,
    getElementById: getElementById,
    updateElement: updateElement
};