const editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/javascript");

const lang_btn = document.getElementById("lang");
const undo_btn = document.getElementById("undo");
const redo_btn = document.getElementById("redo");
const download_btn = document.getElementById("download");
const save_btn = document.getElementById("save");

lang_btn.addEventListener("change",lang_dropdown);
undo_btn.addEventListener("click",undo_func);
redo_btn.addEventListener("click",redo_func);
download_btn.addEventListener("click",dwnld_func);
save_btn.addEventListener("click",save_func);

function lang_dropdown() {
    console.log(lang_btn.value);
    editor.session.setMode(`ace/mode/${lang_btn.value}`);
}

function undo_func() {
    editor.undo();
}

function redo_func() {
    editor.redo();
}

function dwnld_func() {
    var text = editor.getValue();
    text = text.replace(/\n/g, "\r\n");
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "demofile";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

function save_func() {

}
