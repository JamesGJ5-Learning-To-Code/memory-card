// TODO: replace with simply a similar function from npm, instead importing 
// that into the relevant files (then delete this module)

const getDeepCopy = (copiedObject) => {
    return JSON.parse(JSON.stringify(copiedObject));
}

export default getDeepCopy;
