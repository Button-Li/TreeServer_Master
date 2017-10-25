//api.js中引用dndtree.js
var new_element=document.createElement("script");
new_element.setAttribute("type","text/javascript");
new_element.setAttribute("src","./dndtree.js");
document.body.appendChild(new_element);

var id;
var treeJson;


function createTree(json) {
    $.ajax({
        url: "/api/tree",
        data: {tree: json},
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            if (data.ret) {
                if (data.data != null) {
                    console.log(data.data)
                }
            }else {
                alert(data.message)
            }
        },
        error: function (data) {
            console.log(data.message)
        }
    })
}

function getAllTrees() {
    $.ajax({
        url: "/api/trees",
        type: "GET",
        dataType: "JSON",
        success: function (data) {
            var obj;
            if (data.ret) {
                if (data.data != null) {
                    var treeData = data.data;
                    for(var i =0;i<treeData.length;i++) {
                        id = treeData[i].id;
                        treeJson = treeData[i].json;
                        obj=JSON.parse(treeJson);
                        scess(obj);
                    }
                }
            }else {
                alert(data.message)
            }

        },
        error: function (data) {
            console.log(data.message)
        }
    })
}

function saveAllTree() {
    var tree=saveTree();
    console.log(tree);
    $.ajax({
        url:"/api/tree",
        data: {tree: tree,id:id},
        type:"PUT",
        dataType:"JSON",
        success:function(data){
            if (data.ret) {
                if (data.data != null) {
                    console.log(data.data)
                }
            }else {
                alert(data.message)
            }
        },
        error:function (data) {
            console.log(data.message);
        }
    })
}







