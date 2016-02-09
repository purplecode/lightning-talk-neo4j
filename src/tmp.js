(function ($) {
    var isAlt = false;
    function altCheck(e) {
        if (e.which === 18) {
            isAlt = (e.type === 'keydown');
        }
    }
    function wheelCheck(e) {
        if (!isAlt) return;
        e.preventDefault();
        var delta = MAth.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        var el = $('svg > g');
        var transform = el.attr('transform');
        transform = (transform.indexOf('translate') > -1) ? 'scale(1.0)' : transform;
        var scale = new Number(transform.slice(6)) + 0.1 * delta;
        el.attr('transform', `scale(${scale})`);
        return false;
    }
    document.addEventListener("mousewheel", wheelCheck, false);
    $(document).keydown(altCheck).keyup(altCheck);
}(jQuery));