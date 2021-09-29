!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).hotkeys=t()}(this,function(){"use strict";function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var e="undefined"!=typeof navigator&&0<navigator.userAgent.toLowerCase().indexOf("firefox");function p(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function y(e,t){for(var n=t.slice(0,t.length-1),o=0;o<n.length;o++)n[o]=e[n[o].toLowerCase()];return n}function u(e){"string"!=typeof e&&(e="");for(var t=(e=e.replace(/\s/g,"")).split(","),n=t.lastIndexOf("");0<=n;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}for(var t={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,"\u21ea":20,",":188,".":190,"/":191,"`":192,"-":e?173:189,"=":e?61:187,";":e?59:186,"'":222,"[":219,"]":221,"\\":220},d={"\u21e7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},h={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},v={16:!1,18:!1,17:!1,91:!1},g={},n=1;n<20;n++)t["f".concat(n)]=111+n;var w=[],o="all",k=[],m=function(e){return t[e.toLowerCase()]||d[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function i(e){o=e||"all"}function b(){return o||"all"}function c(e){var f=e.scope,c=e.method,t=e.splitKey,a=void 0===t?"+":t;u(e.key).forEach(function(e){var t=e.split(a),n=t.length,o=t[n-1],r="*"===o?"*":m(o);if(g[r]){f=f||b();var i=1<n?y(d,t):[];g[r]=g[r].map(function(e){return(!c||e.method===c)&&e.scope===f&&function(e,t){for(var n=e.length<t.length?t:e,o=e.length<t.length?e:t,r=!0,i=0;i<n.length;i++)~o.indexOf(n[i])||(r=!1);return r}(e.mods,i)?{}:e})}})}function O(e,t,n){var o;if(t.scope===n||"all"===t.scope){for(var r in o=0<t.mods.length,v)Object.prototype.hasOwnProperty.call(v,r)&&(!v[r]&&~t.mods.indexOf(+r)||v[r]&&!~t.mods.indexOf(+r))&&(o=!1);(0!==t.mods.length||v[16]||v[18]||v[17]||v[91])&&!o&&"*"!==t.shortcut||!1===t.method(e,t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function K(n){var e=g["*"],t=n.keyCode||n.which||n.charCode;if(x.filter.call(this,n)){if(93!==t&&224!==t||(t=91),~w.indexOf(t)||229===t||w.push(t),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(e){var t=h[e];n[e]&&!~w.indexOf(t)?w.push(t):!n[e]&&~w.indexOf(t)&&w.splice(w.indexOf(t),1)}),t in v){for(var o in v[t]=!0,d)d[o]===t&&(x[o]=!0);if(!e)return}for(var r in v)Object.prototype.hasOwnProperty.call(v,r)&&(v[r]=n[h[r]]);var i=b();if(e)for(var f=0;f<e.length;f++)e[f].scope===i&&("keydown"===n.type&&e[f].keydown||"keyup"===n.type&&e[f].keyup)&&O(n,e[f],i);if(t in g)for(var c=0;c<g[t].length;c++)if(("keydown"===n.type&&g[t][c].keydown||"keyup"===n.type&&g[t][c].keyup)&&g[t][c].key){for(var a=g[t][c],l=a.key.split(a.splitKey),s=[],p=0;p<l.length;p++)s.push(m(l[p]));s.sort().join("")===w.sort().join("")&&O(n,a,i)}}}function x(e,t,n){w=[];var o=u(e),r=[],i="all",f=document,c=0,a=!1,l=!0,s="+";for(void 0===n&&"function"==typeof t&&(n=t),"[object Object]"===Object.prototype.toString.call(t)&&(t.scope&&(i=t.scope),t.element&&(f=t.element),t.keyup&&(a=t.keyup),void 0!==t.keydown&&(l=t.keydown),"string"==typeof t.splitKey&&(s=t.splitKey)),"string"==typeof t&&(i=t);c<o.length;c++)r=[],1<(e=o[c].split(s)).length&&(r=y(d,e)),(e="*"===(e=e[e.length-1])?"*":m(e))in g||(g[e]=[]),g[e].push({keyup:a,keydown:l,scope:i,mods:r,shortcut:o[c],method:n,key:o[c],splitKey:s});void 0!==f&&!function(e){return!!~k.indexOf(e)}(f)&&window&&(k.push(f),p(f,"keydown",function(e){K(e)}),p(window,"focus",function(){w=[]}),p(f,"keyup",function(e){K(e),function(e){var t=e.keyCode||e.which||e.charCode,n=w.indexOf(t);if(n<0||w.splice(n,1),e.key&&"meta"==e.key.toLowerCase()&&w.splice(0,w.length),93!==t&&224!==t||(t=91),t in v)for(var o in v[t]=!1,d)d[o]===t&&(x[o]=!1)}(e)}))}var r={setScope:i,getScope:b,deleteScope:function(e,t){var n,o;for(var r in e=e||b(),g)if(Object.prototype.hasOwnProperty.call(g,r))for(n=g[r],o=0;o<n.length;)n[o].scope===e?n.splice(o,1):o++;b()===e&&i(t||"all")},getPressedKeyCodes:function(){return w.slice(0)},isPressed:function(e){return"string"==typeof e&&(e=m(e)),!!~w.indexOf(e)},filter:function(e){var t=e.target||e.srcElement,n=t.tagName,o=!0;return!t.isContentEditable&&("INPUT"!==n&&"TEXTAREA"!==n||t.readOnly)||(o=!1),o},unbind:function(e){if(e){if(Array.isArray(e))e.forEach(function(e){e.key&&c(e)});else if("object"===f(e))e.key&&c(e);else if("string"==typeof e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=n[0],i=n[1];"function"==typeof r&&(i=r,r=""),c({key:e,scope:r,method:i,splitKey:"+"})}}else Object.keys(g).forEach(function(e){return delete g[e]})}};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(x[a]=r[a]);if("undefined"!=typeof window){var l=window.hotkeys;x.noConflict=function(e){return e&&window.hotkeys===x&&(window.hotkeys=l),x},window.hotkeys=x}return x});

(() => {
    'use strict';

    const viewMoreDailyNotes = () => {
        if (isElementVisible($(SELECTOR.viewMore))) {
            simulateClick($(SELECTOR.viewMore), false);
        }
    };

    const KEYMAP = new Map([
        // Scrolling
        ['j', () => {
            viewMoreDailyNotes();
            scrollingElement().scrollTop += 50;
        }],
        ['k', () => {
            scrollingElement().scrollTop -= 50;
        }],
        ['d', () => {
            viewMoreDailyNotes();
            scrollingElement().scrollTop += 400;
        }],
        ['u', () => {
            scrollingElement().scrollTop -= 400;
        }],
        ['g,g', () => {
            scrollingElement().scrollTop = 0;
        }],
        ['G', () => {
            viewMoreDailyNotes();
            scrollingElement().scrollTop = scrollingElement().scrollHeight;
        }],
        // Navigation
        ['h', () => {
            if (lastFocusedMainBlock) {
                simulateClick(lastFocusedMainBlock.querySelector(SELECTOR.block), false);
            }

            // focusing didn't work. Probably because lastFocusedMainBlock is lost after switching pages,
            // or no block has been focused yet
            if (document.activeElement === document.body) {
                simulateClick($(SELECTOR.article).querySelector(SELECTOR.block), false);
            }
        }],
        ['l', () => {
            if (lastFocusedSideBlock) {
                simulateClick(lastFocusedSideBlock.querySelector(SELECTOR.block), false);
            }

            // focusing didn't work. Probably because lastFocusedMainBlock is lost after switching pages,
            // or no block has been focused yet
            if (document.activeElement === document.body) {
                simulateClick($(SELECTOR.sidebar).querySelector(SELECTOR.block), false);
            }
        }],
        ['e', () => {
            const targets = targetElements(SELECTOR.block, 'block')
                .concat(targetElements(SELECTOR.title, 'title'));

            hintTargets(targets);
        }],
        ['f', () => {
            const targets = targetElements(SELECTOR.link, 'link')
                .concat(targetElements(SELECTOR.block, 'block'))
                .concat(targetElements(SELECTOR.title, 'title'))
                .concat(targetElements('a', 'anchor'))
                .concat(targetElements(SELECTOR.button, 'button'));

            hintTargets(targets);
        }],
    ]);

    const targetElements = (selector, type) => Array
        .from($$(selector))
        .filter(isElementVisible)
        .map(element => ({ element, type }));

    const hintTargets = (targets) => {
        const hintKeys = getHintKeys(targets.length);
        // zip hintKeys with targets
        const hintToTarget = targets.map((target, i) => [hintKeys[i], target]);

        hintToTarget.forEach(([hint, { element, type }]) => {
            showHint(element, hint, type);
        });

        applyKeyMap(
            new Map(hintToTarget.map(([hint, { element, type }]) => [
                hint,
                ({ shiftKey }) => {
                    if (type === 'anchor') {
                        // Need to click on child of 'a' to bubble up
                        simulateClick(element.firstChild, shiftKey);
                    } else {
                        simulateClick(element, shiftKey);
                    }
                    exitHintMode();
                },
            ])),
            'HINT',
            {
                caseSensitive: false,
                defaultHandler: (event) => {
                    if (event.key === 'Escape') {
                        exitHintMode();
                    }
                },
            },
        );
        hotkeys.setScope('HINT');
    };

    const getHintKeys = (numberOfHints) => {
        if (numberOfHints <= HINT_KEYS.length) {
            return HINT_KEYS.slice(0, numberOfHints);
        }
        if (numberOfHints <= HINT_KEYS.length ** 2) {
            const hintKeys = HINT_KEYS
                .flatMap(keyA => HINT_KEYS.map(keyB => [keyB, keyA]))
                .slice(0, numberOfHints);

            const prefixToHintKey = groupBy(hintKeys, ([keyB, keyA]) => keyB);
            const trimmedHintKeys = Array
                .from(prefixToHintKey.entries())
                .flatMap(([prefix, hintKeys]) => {
                    if (hintKeys.length === 1)  {
                        return [prefix];
                    }
                    return hintKeys.map(keys => keys.join(','));
                });

            return trimmedHintKeys
        }
    };

    const groupBy = (xs, keyFn) => xs.reduce(
        (groups, x) => {
            const key = keyFn(x);
            if (groups.has(key)) {
                groups.get(key).push(x);
            } else {
                groups.set(key, [x]);
            }
            return groups;
        },
        new Map()
    );
    const HINT_KEYS = [
        // home row index/middle
        'j', 'f', 'k', 'd',
        // home row
        'l', 's', 'a',
        // home row index up/down
        'u', 'r', 'v', 'm',
        // home row middle up/down
        'i', 'e', 'c',
        // home row index left/right
        'h', 'g',
        // hard
        // 'q', 'w', 't', 'y', 'o', 'p', 'z', 'x', 'b', 'n', '.', '/',
    ];

    const scrollingElement = () => {
        if (focusedPanel === 'SIDEBAR') {
            return $(SELECTOR.sidebar);
        }

        return $(SELECTOR.article).parentElement;
    };

    const SELECTOR = {
        link: '.rm-page-ref',
        block: '.roam-block',
        editingBlock: '.roam-block-input',
        highlightedBlock: '.block-highlight-blue',
        title: '.rm-title-display',
        // cmd up/down already folds
        foldCaret: '.block-expand',
        article: '.roam-article',
        sidebar: '#roam-right-sidebar-content',
        search: '#find-or-create-input',
        button: '.bp3-button',
        viewMore: '.roam-log-preview',
    };

    // $ = document.querySelector doesn't work for some reason
    const $ = selector => document.querySelector(selector);
    const $$ = selector => document.querySelectorAll(selector);

    function detectMode() {
        if (document.querySelector(SELECTOR.highlightedBlock)) {
            return 'VISUAL';
        }

        if (document.activeElement !== document.body) {
            return 'INSERT';
        }

        return 'NORMAL';
    }

    function triggerMouseEvent(node, eventType, shiftKey) {
        const { x, y } = getScreenXY(node);
        const clickEvent = new MouseEvent(eventType, {
            shiftKey,
            bubbles: true,
            cancelable: true,
            screenX: x,
            screenY: y,
        });
        node.dispatchEvent(clickEvent);
    }

    function simulateClick(element, shiftKey) {
        triggerMouseEvent(element, "mouseover", shiftKey);
        triggerMouseEvent(element, "mousedown", shiftKey);
        triggerMouseEvent(element, "mouseup", shiftKey);
        triggerMouseEvent(element, "click", shiftKey);
        triggerMouseEvent(element, "mouseout", shiftKey);
    }

    // Scope scrolling to the focused panel
    let focusedPanel;
    let lastFocusedMainBlock;
    let lastFocusedSideBlock;

    // Change focused panel when clicking
    window.addEventListener('focus', () => {
        // Keep the previous panel focused when searching
        if($(SELECTOR.search).contains(document.activeElement)) {
            return;
        }

        if($(SELECTOR.sidebar) && $(SELECTOR.sidebar).contains(document.activeElement)) {
            focusedPanel = 'SIDEBAR';
            lastFocusedSideBlock = document.activeElement.closest('.roam-block-container');
        } else {
            focusedPanel = 'MAIN';
            lastFocusedMainBlock = document.activeElement.closest('.roam-block-container');
        }
    }, true);

    // Listen to hotkeys
    const applyKeyMap = (keyMap, scope, options) => {
        let lastKey;

        hotkeys(
            '*',
            { scope, keydown: true, keyup: false },
            (event, hotkey) => {
                const key = options.caseSensitive ? event.key : event.key.toLowerCase();
                const handler = keyMap.get(lastKey + ',' + key) || keyMap.get(key);
                lastKey = key;
                if (handler) {
                    handler(event);
                } else if (options.defaultHandler) {
                    options.defaultHandler(event, hotkey);
                }
            }
        );
    };
    applyKeyMap(KEYMAP, 'NORMAL', {
        caseSensitive: true,
        defaultHandler: (event) => {
            if (event.key === 'Escape') {
                // Blur text areas and inputs
                document.activeElement.blur();
                // Blur tooltips
                simulateClick(escapePixel, false);
            }
        },
    });
    hotkeys.filter = event => {
        if (event.key === 'Escape') {
            return true;
        }
        const tagName = event.target.tagName;
        return !(tagName.isContentEditable || tagName == 'INPUT' || tagName == 'SELECT' || tagName == 'TEXTAREA');
    };
    hotkeys.setScope('NORMAL');

    const escapePixel = document.createElement('div');
    Object.assign(escapePixel.style, {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '1px',
        height: '1px',
        backgroundColor: 'rgba(0,0,0,0.01)',
        zIndex: 999999,
    });
    const hintOverlay = document.createElement('div');
    Object.assign(hintOverlay.style, {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        pointerEvents: 'none',
        fontSize: '10px',
        fontWeight: 'bold',
        zIndex: 999999,
    });
    const waitForLoad = new MutationObserver(() => {
        if ($('.roam-app')) {
            waitForLoad.disconnect();
            document.body.appendChild(hintOverlay);
            document.body.appendChild(escapePixel);
        }
    });
    waitForLoad.observe($('#app'), {
        childList: true,
        attributes: true,
        subtree: true,
    });

    const isElementVisible = (element) => {
        if (!element) {
            return false;
        }
        const { x, y } = getScreenXY(element);
        return x >= 0 && y >= 0 && x <= window.innerWidth && y <= window.innerHeight;
    };

    const getScreenXY = element =>
        element.getBoundingClientRect
            ? element.getBoundingClientRect()
            : element.parentElement.getBoundingClientRect();

    const showHint = (element, hintText, type) => {
        const { x, y } = getScreenXY(element);
        const hint = document.createElement('div');
        Object.assign(hint.style, {
            position: 'absolute',
            borderRadius: '3px',
            padding: '0 3px 0 3px',
            border: '1px solid gray',
            boxShadow: '2px 2px 5px gray',
        });
        if (type === 'block' || type === 'title') {
            Object.assign(hint.style, {
                left: (x - 24) + 'px',
                top: (y + 7) + 'px',
                backgroundColor: 'lightgreen',
                zIndex: 1,
            });
        } else if (type === 'button') {
            Object.assign(hint.style, {
                left: (x) + 'px',
                top: (y) + 'px',
                backgroundColor: 'plum',
                zIndex: 2,
            });
        } else {
            Object.assign(hint.style, {
                left: (x) + 'px',
                top: (y) + 'px',
                backgroundColor: 'gold',
                zIndex: 2,
            });
        }
        hint.innerText = hintText.toUpperCase().replace(/,/g,'');
        hintOverlay.appendChild(hint);
    };

    const exitHintMode = () => {
        hintOverlay.innerHTML = '';
        hotkeys.deleteScope('HINT');
        hotkeys.setScope('NORMAL');
    };

    window.addEventListener('click', exitHintMode, true);
})();
