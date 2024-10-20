
function customRender(reactElement,mainContainer){
    // let domElemet=document.createElement(reactElement.type)
    // domElemet.innerHTML=reactElement.children
    // domElemet.setAttribute('href',reactElement.props.href)
    // domElemet.setAttribute('target',reactElement.props.target)
    // mainContainer.appendChild(domElemet);

    const domElemet=document.createElement(reactElement.type);
    domElemet.innerHTML=reactElement.children;
    for(const prop in reactElement.props){
        if(prop=='children') continue
        domElemet.setAttribute(prop,reactElement.props[prop])
    }
    console.log("hi")
    mainContainer.appendChild(domElemet)
}
const reactElemet={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}
const mainContainer=document.querySelector('#root')


customRender(reactElemet,mainContainer)

