// 😋
// get some important nodes
const h_node = getByTag("head")[0];
const b_node = getByTag("body")[0];
// nodes in the document
const first_band = getByClass("first-band")[0];
const second_band = getByClass("second-band")[0];
const third_band = getByClass("third-band")[0];
const forth_band = getByClass("forth-band")[0];
let cur_list = topTenList["2018"];
const default_hover_msg = "hover over a #!";

// $$$$$$$$$$ add hover effect for the button $$$$$$$$$$
let sty_button = `.boom:hover {
    cursor: pointer;
}`
addStyle(h_node, sty_button);

// $$$$$$$$$$ change text at the top when click $$$$$$$$$$
let btns = getByClass("btn-year");  // get all buttons
let first_band_txt = getByClass("first-band-txt")[0];
for(let k=0; k<btns.length; k++){
    btns.item(k).addEventListener("click", function(){
        first_band_txt.innerText=btns.item(k).innerText;
        // update list
        cur_list = topTenList[btns.item(k).innerText];
    });
}

// $$$$$$$$$$ add hover effect to the circles $$$$$$$$$$
let cirs = getByClass("circle");    // get all the circles

for(let n=0; n<cirs.length; n++){
    // mouse over event
    cirs.item(n).addEventListener("mouseover", function(){

        // remove default one
        let def = getByClass("forth-band-default-txt")[0];
        def.remove();

        // add new shapes
        createDisplayObj(`${cur_list[n]["id"]}`, cur_list[n]["name"]);
    
    });

    cirs.item(n).addEventListener("mouseleave", function(){
        
        // add default text
        createDefaultObj();

        // remove what's added before
        let tmp_list_1 = getByClass("triangle");
        let tmp_list_2 = getByClass("forth-band-food");
        for(var m=0; m<tmp_list_1.length; m++){
            tmp_list_1.item(m).remove();
        }
        for(var m=0; m<tmp_list_2.length; m++){
            tmp_list_2.item(m).remove();
        }
    })
    
};

// function to add style to header
function addStyle(head_node, style_txt){
    let style_node = createNewNode("STYLE", undefined, head_node, undefined);
    if(style_node.styleSheet){
        style_node.styleSheet.cssText = style_txt;
    }else{
        style_node.appendChild(document.createTextNode(style_txt));
    } 
}

// function to create the shape in forth band when hovered
function createDisplayObj(num_input, food_input){
    let tri = createNewNode("DIV", `${num_input}`, forth_band, "aaaa");
    tri.classList.add("forth-band-display");
    tri.classList.add("triangle");
    let rect = createNewNode("DIV", `${food_input}`, forth_band, "bbbb");
    rect.classList.add("forth-band-display");
    rect.classList.add("forth-band-food");
}

// function to create default txt for forth band
function createDefaultObj(){
    let dt = createNewNode("TXT", default_hover_msg, forth_band, "forth-band-default-txt");
    dt.classList.add("eeee");
    return dt;  // return the node if needed
}

// ==================== functions to use ====================
// I wrote these for a previous workshop so I just copy-pasted.
// and I added a few more
// NOTE: I wrote these assuming that the inputs will hit a target, therefore only type checking and no exception handling.
function getByTag(tagName){
    if(typeof(tagName)!=="string"){
        alert("Not correct tag name!");
    }   

    // return the node
    return document.getElementsByTagName(tagName.toUpperCase());
}
function getById(id){
    if(typeof(id)!=="string"){
        alert("Not correct id!");
    }   

    // return the node
    return document.getElementById(id);
}
function getByClass(className){
    if(typeof(className)!=="string"){
        alert("Not correct class!");
    }   

    // return the node, or an array of node depending on the items
    return document.getElementsByClassName(className);
}


function createNewNode(type, text, parent, className){
    // checking input
    if(typeof(type)!=="string"){
    alert("NOT VALID TYPE!!!");
    }

    // create basic element
    let ele = document.createElement(type);

    // handle inner text
    let t = "";
    if(text!==undefined){
        t_node = document.createTextNode(text);
        ele.appendChild(t_node);
    }

    // handle parent
    if(parent!==undefined){
        parent.appendChild(ele);
    }

    // handle className
    if(className!==undefined){
        ele.classList.add(className);
    }

    // return the element if needed.
    return ele; 
}
function createImgNode(img_link, alt_text, parent, className){
    let image = createNewNode("img", undefined, parent, className)

    // handle src link
    if(img_link!==undefined){
    image.src = img_link;       // the src link
    }
    // handle alt text
    if(alt_text!==undefined){
    image.alt=alt_text;     // the alt property
    }

    // return image node if needed
    return image;  
}
function createAnchorNode(href_input, text, parent, className){
    let a_node = createNewNode("A", text, parent, className);

    // handle href
    if(href_input!==undefined){
    a_node.href = href_input;
    }

    // return anchor node if needed
    return a_node;
}
function createStyleNode(href_input, text, parent){
    let style_node = createNewNode("link", text, parent, undefined);

    //handle rel
    style_node.rel = "stylesheet";

    // handle href
    if(href_input!==undefined){
        style_node.href = href_input;
    }

    // return node if needed
    return style_node;
}
function createLinkNode(href_input, text, parent, className){
    let link_node = createNewNode("link", text, parent, className);

    // handle href
    if(href_input!==undefined){
        link_node.href = href_input;
    }

    // return node if needed
    return link_node;
}
function createScriptNode(src_input, type, parent){
    let script_node = createNewNode("script", undefined, parent, undefined);

    // handle type
    if(type!==undefined){
    script_node.type=type;
    }
    // handle href
    if(src_input!==undefined){
    script_node.href = src_input;
    }

    // return node if needed
    return style_node;
}

