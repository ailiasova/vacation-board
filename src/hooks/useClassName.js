
/** @namespace */
function useClassName() {
    /**
     * @param {string} classes - css-класс
     * @param {Object} [times] mods - мод
     * @returns {any}
     */

    return (classes, mods={}) => {
        let cssStore = [...classes.filter(css => !!css)];
        if (mods) {
            Object.entries(mods).forEach(([name, status]) => {
                if (status) {
                    cssStore.push(name);
                }
            })
        }
        return cssStore.join(' ')
    };
}

export default useClassName;
