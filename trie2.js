function Node(data){
	this.data = data;
	this.children={};
	this.prefix =0;
	this.word = false;

}

function Trie(){
	this.root = new Node('');
}


Trie.prototype.totalcnt =function(){
var que = [this.root];
var count=0;
	while(que.length>0){
		var node = que.shift();
		if(node.word){
			count++;
		}
		for(var child in node.children){  
			if(node.children.hasOwnProperty(child)){
				que.push(node.children[child]);
			}
		}

	}
	return count;

}

/* writer by Arpit Garg*/
Trie.prototype.contains =function(str){
var que = [this.root];
var i=0;
while(que.length){
	var node = que.shift();
	for(child in node.children){
		if(node.children.hasOwnProperty(child) && str[i] == child){
	 		i++;
	 		que.push(node.children[child]);
	 		break;
	 	}
	 }
 }
 if(i==str.length){
	return ("Trie contains "+str);
 }	
return ("trie does not cntain "+str); 

}


Trie.prototype.printLevel = function(){
	var str='';
	var que =[this.root],child,visited={};
	while(que.length){
		var currnode = que.shift();
		for(var child in currnode.children){
			que.push(currnode.children[child]);
			str+= child;
		}
	}

	console.log("level by level.. " +str);
}


Trie.prototype.addData = function(str){
	if(!this.root)
		return;
	this.add(this.root,str);

	}
Trie.prototype.add = function(root,str){
	var  start = str.charAt(0);
	  if(!node || !str) {
    return null;
  }
	root.prefix ++;

	if(!root.children[start]){
		var node = new Node(start);
		root.children[start] = node;	
	}
	var remain = str.substring(1);
	if(remain==''){
		node.word = true;
		return;
	}
	this.add(node,str.substring(1));

}



var tr =  new Trie();

tr.addData('two');
tr.addData('One');
tr.addData('three');

console.log("total count of words is "+tr.totalcnt()+"\n");
/*
console.log(tr.contains('One'));
console.log(tr.contains('Three'));
console.log(tr.contains('three'));*/

tr.printLevel();