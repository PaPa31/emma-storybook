(this["webpackJsonpmy-component-library"]=this["webpackJsonpmy-component-library"]||[]).push([[0],{136:function(n,r,o){"use strict";o.r(r);var t=o(23),e=o(0),c=o.n(e),a=o(44),i=o.n(a),u=o(3),l=o(2),s="#F977C9",d="#F84FBA",m="#F51AA4",f="#529e66",p="#367b48",b="#276738",g="#e1c542",x="#cab23f",v="#b49e35",h="#d0454c",C="#b54248",y="#95353a",k="#ffffff",O="#f4f5f7",w="#e1e1e1",j="#737581",E="#000000",A='"Roboto Mono", monospace',S="1.4rem",B="1.1rem",F="1rem",H="0.8rem",L={primaryColor:m,primaryHoverColor:d,primaryActiveColor:s,textColorOnPrimary:k,textColor:E,textColorInverted:k,disabled:j,textOnDisabled:w,primaryFont:A,status:{warningColor:v,errorColor:y,successColor:b,warningHoverColor:x,errorHoverColor:C,successHoverColor:p,warningActiveColor:g,errorActiveColor:h,successActiveColor:f},formElementBackground:k,textOnFormElementBackground:E,textFieldBackground:O,textFieldLabelColor:E},z={primaryColor:k,primaryHoverColor:O,primaryActiveColor:w,textColorOnPrimary:m,textColor:m,textColorInverted:k,primaryFont:A,disabled:j,textOnDisabled:w,status:{warningColor:v,errorColor:y,successColor:b,warningHoverColor:x,errorHoverColor:C,successHoverColor:p,warningActiveColor:g,errorActiveColor:h,successActiveColor:f},formElementBackground:s,textOnFormElementBackground:k,textFieldBackground:d,textFieldLabelColor:O},M=o(50);function P(){var n=Object(u.a)(["\n","\nhtml {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n}\nbody {\n  margin: 0;\n  font-family: ",";\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nmain {\n  width: 90%;\n  margin: 0 auto;\n}\n"]);return P=function(){return n},n}var D=Object(l.b)(P(),Object(M.a)(),A),I=o(16);function U(){var n=Object(u.a)(["\n  // background-color: ",";\n  background:none;\n  color: ",";\n  border: 2px solid transparent;\n\n  &:disabled {\n    color: ",";\n    cursor: not-allowed;\n  }\n  ","\n"]);return U=function(){return n},n}function T(){var n=Object(u.a)(["\n  background: none;\n  color: ",";\n  border: 2px solid ",";\n\n  &:disabled {\n    background: none;\n    border: 2px solid ",";\n    color: ",";\n    cursor: not-allowed;\n  }\n  ","\n"]);return T=function(){return n},n}function W(){var n=Object(u.a)(["\n  background-color: ",";\n  color: ",";\n  border: 2px solid transparent;\n\n  &:disabled {\n    background-color: ",";\n    color: ",";\n    border-color: ",";\n    cursor: not-allowed;\n  }\n  ","\n"]);return W=function(){return n},n}function Y(){var n=Object(u.a)(["\n  padding: 8px 12px;\n  font-size: ","\n  border-radius: 2px;\n  min-width: 100px;\n  cursor: pointer;\n  font-family: ",";\n  transition: background-color 0.2s linear, color 0.2s linear;\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n\n  &:focus {\n    outline: 3px solid ",";\n    outline-offset: 2px;\n  }\n\n  &:active {\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    background: none;\n    color: ",";\n    border: none;\n  }\n"]);return Y=function(){return n},n}var J={small:function(){return"\n    font-size: ".concat(H,";\n    padding: 8px;\n  ")},large:function(){return"\n    font-size: ".concat(B,";\n    padding: 16px 24px;\n  ")},warning:function(n){var r=n.theme;return"\n  &:hover {\n    background-color: ".concat(r.status.warningHoverColor,";\n  }\n\n  &:focus {\n    outline: 3px solid ").concat(r.status.warningHoverColor,";\n  }\n\n  &:active {\n    background-color: ").concat(r.status.warningActiveColor,";\n    border-color: ").concat(r.status.warningActiveColor,";\n  }\n  ")},primaryButtonWarning:function(n){var r=n.theme;return"\n    background-color: ".concat(r.status.warningColor,";\n  ")},secondaryButtonWarning:function(n){var r=n.theme;return"\n    border: 2px solid ".concat(r.status.warningColor,";\n    color: ").concat(r.status.warningColor,"\n  ")},tertiaryButtonWarning:function(n){var r=n.theme;return"\n  color: ".concat(r.status.warningColor,"\n  ")},error:function(n){var r=n.theme;return"\n  &:hover {\n    background-color: ".concat(r.status.errorHoverColor,";\n  }\n\n  &:focus {\n    outline: 3px solid ").concat(r.status.errorHoverColor,";\n  }\n\n  &:active {\n    background-color: ").concat(r.status.errorActiveColor,";\n    border-color: ").concat(r.status.errorActiveColor,";\n  }\n  ")},primaryButtonError:function(n){var r=n.theme;return"\n    background-color: ".concat(r.status.errorColor,";\n  ")},secondaryButtonError:function(n){var r=n.theme;return"\n    border: 2px solid ".concat(r.status.errorColor,";\n    color: ").concat(r.status.errorColor,"\n  ")},tertiaryButtonError:function(n){var r=n.theme;return"\n  color: ".concat(r.status.errorColor,"\n  ")},success:function(n){var r=n.theme;return"\n  &:hover {\n    background-color: ".concat(r.status.successHoverColor,";\n  }\n\n  &:focus {\n    outline: 3px solid ").concat(r.status.successHoverColor,";\n  }\n\n  &:active {\n    background-color: ").concat(r.status.successActiveColor,";\n    border-color: ").concat(r.status.successActiveColor,";\n  }\n  ")},primaryButtonSuccess:function(n){var r=n.theme;return"\n    background-color: ".concat(r.status.successColor,";\n  ")},secondaryButtonSuccess:function(n){var r=n.theme;return"\n    border: 2px solid ".concat(r.status.successColor,";\n    color: ").concat(r.status.successColor,"\n  ")},tertiaryButtonSuccess:function(n){var r=n.theme;return"\n  color: ".concat(r.status.successColor,"\n  ")}},q=l.c.button(Y(),F,(function(n){return n.theme.primaryFont}),(function(n){return n.theme.primaryHoverColor}),(function(n){return n.theme.textColorOnPrimary}),(function(n){return n.theme.primaryHoverColor}),(function(n){return n.theme.primaryActiveColor}),(function(n){return n.theme.primaryActiveColor}),(function(n){return n.theme.textColorOnPrimary}),(function(n){return n.theme.disabled})),R=Object(l.c)(q)(W(),(function(n){return n.theme.primaryColor}),(function(n){return n.theme.textColorOnPrimary}),(function(n){return n.theme.disabled}),(function(n){return n.theme.textOnDisabled}),(function(n){return n.theme.disabled}),Object(I.applyStyleModifiers)(J)),Z=(Object(l.c)(q)(T(),(function(n){return n.theme.primaryColor}),(function(n){return n.theme.primaryColor}),(function(n){return n.theme.disabled}),(function(n){return n.theme.disabled}),Object(I.applyStyleModifiers)(J)),Object(l.c)(q)(U(),(function(n){return n.theme.textColorOnPrimary}),(function(n){return n.theme.primaryColor}),(function(n){return n.theme.disabled}),Object(I.applyStyleModifiers)(J)),o(8)),G=o(48),K=o.n(G),N=o(49),Q=o.n(N);function V(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n"]);return V=function(){return n},n}var X=l.c.svg(V()),$=function(){return c.a.createElement(X,{"aria-hidden":"true"},c.a.createElement("path",{d:"M24 3.12039L20.877 0L11.9994 8.87811L3.1215 0L0 3.12189L8.877 12L0 20.8787L3.1215 24L11.9994 15.1228L20.877 24L24 20.8787L15.1215 12L24 3.12039Z",fill:"#F51AA4"}))},_={SignUp:K.a,SignIn:Q.a};function nn(){var n=Object(u.a)(["\n  color: ",";\n  font-size: ",";\n  margin-bottom: 8px;\n"]);return nn=function(){return n},n}function rn(){var n=Object(u.a)(["\n  width: 316px;\n  height: 52px;\n  background-color: ",";\n  color: ",";\n  border: none;\n  padding-left: 8px;\n  font-family: ",";\n  border-radius: 2px;\n"]);return rn=function(){return n},n}l.c.input(rn(),(function(n){return n.theme.textFieldBackground}),(function(n){return n.theme.textFieldLabelColor}),A),l.c.label(nn(),(function(n){return n.theme.textFieldLabelColor}),H);function on(){var n=Object(u.a)(["\n  flex-direction: row;\n  justify-content: space-around;\n"]);return on=function(){return n},n}function tn(){var n=Object(u.a)(["\n  cursor: pointer;\n  background: none;\n  border: none;\n  position: absolute;\n  top: 40px;\n  right: 40px;\n  width: 24px;\n  height: 24px;\n  padding: 0;\n"]);return tn=function(){return n},n}function en(){var n=Object(u.a)(["\n  font-size: ",";\n  max-width: 70%;\n  text-align: center;\n"]);return en=function(){return n},n}function cn(){var n=Object(u.a)(["\n  font-size: ",";\n"]);return cn=function(){return n},n}function an(){var n=Object(u.a)(["\n  width: 800px;\n  height: 500px;\n  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);\n  background-color: ",";\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border-radius: 2px;\n"]);return an=function(){return n},n}var un=l.c.div(an(),(function(n){return n.theme.formElementBackground}),(function(n){return n.theme.textOnFormElementBackground})),ln=l.c.h3(cn(),S),sn=l.c.p(en(),F),dn=l.c.button(tn()),mn=(Object(l.c)(un)(on()),function(n){return{opacity:n?1:0,transform:n?"translateY(0)":"translateY(-200%)"}}),fn=function(n){var r=n.showModal,o=n.setShowModal;return c.a.createElement(Z.a.div,{style:Object(Z.b)(mn(r))},c.a.createElement(un,null,c.a.createElement("img",{src:_.SignUp,alt:"Sign up for an account!","aria-hidden":"true"}),c.a.createElement(ln,null,"Sign Up"),c.a.createElement(sn,null,"Sign up today to get access to all of our content and features!"),c.a.createElement(R,{onClick:function(){return console.log("You signed up!")}},"Sign Up"),c.a.createElement(dn,{"aria-label":"Close modal",onClick:function(){return o(!r)}},c.a.createElement($,null))))},pn=function(){var n=Object(e.useState)(!1),r=Object(t.a)(n,2),o=r[0],a=r[1],i=Object(e.useState)(!1),u=Object(t.a)(i,2),s=u[0],d=u[1];return c.a.createElement(l.a,{theme:o?z:L},c.a.createElement("button",{style:{margin:"0 16px 24px",padding:"8px",background:"none",cursor:"pointer",border:"2px solid #000",marginTop:"60px"},onClick:function(){return a(!0)}},"Dark theme"),c.a.createElement("button",{style:{margin:"0 16px 24px",padding:"8px",background:"none",cursor:"pointer",border:"2px solid #000",marginTop:"60px"},onClick:function(){return a(!1)}},"Default theme"),c.a.createElement("button",{style:{margin:"0 16px 24px",padding:"8px",background:"none"},onClick:function(){return d(!s)}},"Toggle modal"),c.a.createElement("div",{style:{background:o?L.primaryColor:z.primaryColor,width:"100vw",height:"90vh",display:"flex",alignItems:"center",justifyContent:"space-around"}},c.a.createElement(fn,{showModal:s,setShowModal:d}),c.a.createElement(D,null)))};i.a.render(c.a.createElement(pn,null),document.querySelector("#root"))},48:function(n,r,o){n.exports=o.p+"static/media/SignUp.d65ff196.svg"},49:function(n,r,o){n.exports=o.p+"static/media/SignIn.8ff7d4d7.svg"},51:function(n,r,o){n.exports=o(136)}},[[51,1,2]]]);
//# sourceMappingURL=main.4f5a4a22.chunk.js.map