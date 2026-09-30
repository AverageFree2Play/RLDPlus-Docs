const style = `.tag {
    color: #ffffff;
    line-height: .8rem;
    padding: 5px;
    margin-left: 7px !important;
    margin: 0 !important; 
    background-clip: padding-box;
    border-radius: 3px;
    display: inline-block;
    font-size: .7rem;
    font-family: "Roboto";
    font-weight: normal;
}
.static {
    background-color: rgb(38, 70, 83);
}
.read-only {
    background-color: rgb(42, 157, 143);
}
.client-only {
    background-color: rgb(89, 140, 206);
}
.server-only {
    background-color: rgb(89, 140, 206);
}
.toggleable {
    background-color: rgb(178, 92, 162);
}
.chainable {
    background-color: rgb(122, 103, 231);
}
.recommended {
    background-color: rgb(126, 194, 136);
}
.required {
    background-color: rgb(231, 101, 104);
}
.optional {
    background-color: rgb(188, 176, 116);
}
.unstable {
    background-color: rgb(204, 134, 80);
}
.deprecated {
    background-color: rgb(227, 87, 75);
}
.yields {
    background-color: rgb(163, 149, 79);
}
.critical {
    background-color: rgb(255, 0, 0);
}
h4 {
    display: inline;
}`

var replaceStuff = [
    ["{read-only}", '<p class="tag read-only">read-only</p>'],
    ["{static}", '<p class="tag static">static</p>'],
    ["{server-only}", '<p class="tag server-only">server-only</p>'],
    ["{client-only}", '<p class="tag client-only">client-only</p>'],
    ["{deprecated}", '<p class="tag deprecated">deprecated</p>'],
    ["{yields}", '<p class="tag yields">yields</p>'],
    ["{critical}", '<p class="tag critical">critical</p>'],
    ["{chainable}", '<p class="tag chainable">chainable</p>'],
    ["{required}", '<p class="tag required">required</p>'],
    ["{optional}", '<p class="tag optional">optional</p>'],
    ["{recommended}", '<p class="tag recommended">recommended</p>'],
    ["{unstable}", '<p class="tag unstable">unstable</p>'],
    ["{toggleable}", '<p class="tag toggleable">toggleable</p>'],
];

/**
 * Enhances a tag element with a hover tooltip.
 * 
 * @param {HTMLElement} tagElement - The DOM element representing the tag.
 * @param {string} tooltipText - The text description to display inside the tooltip.
 */
function addTagTooltip(tagElement, tooltipText) {
    if (!tagElement || !tooltipText) return;

    // 1. Ensure parent tag has relative positioning for correct tooltip placement
    tagElement.style.position = 'relative';
    tagElement.style.cursor = 'pointer';

    // 2. Create tooltip container
    const tooltip = document.createElement('span');
    tooltip.className = 'tag-tooltip';
    tooltip.textContent = tooltipText;

    // 3. Apply baseline CSS styles for the tooltip
    Object.assign(tooltip.style, {
        position: 'absolute',
        bottom: '125%', // Position above the tag
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#333',
        color: '#fff',
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '12px',
        whiteSpace: 'nowrap',
        visibility: 'hidden',
        opacity: '0',
        transition: 'opacity 0.2s ease, visibility 0.2s ease',
        zIndex: '1000',
        pointerEvents: 'none',
        boxShadow: '0px 2px 5px rgba(0,0,0,0.2)'
    });

    // 4. Attach hover event listeners
    tagElement.addEventListener('mouseenter', () => {
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
    });

    tagElement.addEventListener('mouseleave', () => {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    });

    // 5. Append tooltip to tag element
    tagElement.appendChild(tooltip);
}

function replace(element) {
    for (var i = 0; i < replaceStuff.length; i++) {
        var from = replaceStuff[i][0]
        var to = replaceStuff[i][1]
        if ((element.innerHTML && element.innerHTML.includes(from))) {
            element.innerHTML = element.innerHTML.replace(from, to)
            element.style.display = "inline"
        }
    }
}

const styleElement = document.createElement("style")
styleElement.innerHTML = style

document.head.appendChild(styleElement)

window.onload = function WindowLoad(event) {
    var elems = document.body.getElementsByTagName("p")
    for (var i = 0; i < elems.length; i++) {
        replace(elems.item(i))
    }
}