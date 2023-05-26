"use strict";
// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).
// This shows the HTML page in "ui.html".
figma.showUI(__html__, { width: 300, height: 270, title: "Cover Generator" });
figma.loadFontAsync({ family: "PingFang SC", style: "Semibold" });
figma.loadFontAsync({ family: "PingFang SC", style: "Regular" });
figma.loadFontAsync({ family: "Inter", style: "Regular" });
let randomContent = ["👻", "👾", "🤖", "🎃", "🐱"];
// let bgImage = ["🪐️"];
let index = parseInt(Math.random() * randomContent.length);
const userinfo = figma.currentUser;
const username = userinfo.name;
const avatarUrl = userinfo.photoUrl;
const usercolor = userinfo.color;
console.log(username);
console.log(avatarUrl);
console.log(usercolor);
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
    // One way of distinguishing between different types of messages sent from
    // your HTML page is to use an object with a "type" property like this.
    if (msg.type === 'anctionCreate') {
        const { prj, desc, state } = msg.formDataObj;
        //创建封面
        let newDate = new Date();
        const thumbnail = figma.createFrame();
        thumbnail.name = 'thumbnail';
        thumbnail.fills = [{ type: "SOLID", color: { r: 0.9490196108818054, g: 0.9411764740943909, b: 0.95686274766922 } }];
        thumbnail.layoutMode = 'VERTICAL';
        thumbnail.itemSpacing = 0;
        thumbnail.horizontalPadding = 120;
        thumbnail.verticalPadding = 20;
        thumbnail.resize(1264, 726);
        thumbnail.primaryAxisAlignItems = "SPACE_BETWEEN";
        const group1 = figma.createFrame();
        group1.itemSpacing = 24;
        group1.name = 'group1';
        group1.paddingTop = 32;
        group1.paddingBottom = 32;
        group1.layoutAlign = 'STRETCH';
        group1.layoutMode = 'VERTICAL';
        group1.verticalPadding = 60;
        group1.fills = [];
        thumbnail.appendChild(group1);
        const group2 = figma.createFrame();
        group2.itemSpacing = 24;
        group2.name = 'group2';
        group2.paddingTop = 35;
        group2.paddingBottom = 35;
        group2.layoutAlign = 'STRETCH';
        group2.layoutMode = 'VERTICAL';
        group2.fills = [];
        group2.verticalPadding = 40;
        thumbnail.appendChild(group2);
        const projectTitle = figma.createText();
        projectTitle.characters = String(prj);
        projectTitle.fontSize = 80;
        projectTitle.fontName = { family: 'PingFang SC', style: 'Semibold' };
        // projectTitle.textAutoResize = 'WIDTH_AND_HEIGHT';
        projectTitle.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        group1.appendChild(projectTitle);
        // const projectDesc: TextNode = figma.createText();
        // projectDesc.characters =  String(desc);
        // projectDesc.fontSize = 48;
        // projectDesc.fontName = {family: 'PingFang SC', style: 'Regular'};
        // projectDesc.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } }];
        // group1.appendChild(projectDesc);
        const releasebg = figma.createFrame();
        releasebg.cornerRadius = 100;
        releasebg.fills = [{ type: 'SOLID', color: { r: 0.18431372940540314, g: 0.4274509847164154, b: 0.9882352948188782 } }];
        releasebg.horizontalPadding = 32;
        releasebg.verticalPadding = 16;
        releasebg.name = 'releasebg';
        releasebg.layoutAlign = "MIN";
        releasebg.layoutMode = "VERTICAL";
        releasebg.counterAxisAlignItems = "MIN";
        releasebg.counterAxisSizingMode = "AUTO";
        group1.appendChild(releasebg);
        const stateValue = figma.createText();
        stateValue.characters = String(state);
        stateValue.fontSize = 48;
        stateValue.fontName = { family: 'PingFang SC', style: 'Regular' };
        stateValue.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        releasebg.appendChild(stateValue);
        const userName = figma.createText();
        userName.characters = randomContent[index] + " " + username;
        userName.fontSize = 48;
        userName.fontName = { family: 'PingFang SC', style: 'Regular' };
        userName.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        group2.appendChild(userName);
        const currentTime = figma.createText();
        currentTime.characters = "创建时间: " + newDate.toLocaleString();
        currentTime.fontSize = 48;
        currentTime.fontName = { family: 'PingFang SC', style: 'Regular' };
        currentTime.fills = [{ type: "SOLID", color: { r: 0.6, g: 0.6, b: 0.6 } }];
        group2.appendChild(currentTime);
        const Thumbnail = figma.createFrame();
        Thumbnail.name = 'thumbnail';
        Thumbnail.resize(1264, 726);
        Thumbnail.layoutMode = "NONE";
        Thumbnail.appendChild(thumbnail);
        const bgImg = figma.createText();
        bgImg.characters = "🪐️";
        bgImg.fontSize = 800;
        bgImg.opacity = 0.05;
        bgImg.rotation = 90;
        bgImg.x = 657;
        bgImg.y = 760;
        bgImg.resize(570, 630);
        bgImg.locked = true;
        Thumbnail.appendChild(thumbnail);
        Thumbnail.appendChild(bgImg);
        figma.setFileThumbnailNodeAsync(Thumbnail);
        let arrNew = [];
        let all = [];
        arrNew.push(Thumbnail);
        figma.viewport.scrollAndZoomIntoView(arrNew);
        figma.closePlugin('👻 创建成功~');
    }
    // else if(msg.type === 'anctionFresh'){
    // let timeStamp = figma.root.children[0].children[0].children[1].children[1];
    // let statusFrame = figma.root.children[0].children[0].children[0].children[2];
    // let statusText = statusFrame.children[0];
    // let currentTitle = figma.root.children[0].children[0].children[0].children[0];
    // let descFrame = figma.root.children[0].children[0].children[0].children[1];
    // timeStamp = "最近更新: "+ newDate.toLocaleString();
    // statusText = String(state);
    // currentTitle = String(prj);
    // decFrame = String(desc);
    // figma.closePlugin('👻 更新成功~') 
    // }
    else if (msg.type === 'cancel') {
        figma.closePlugin();
    }
};
// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
