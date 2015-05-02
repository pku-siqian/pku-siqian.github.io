function lose(){
        alert("LOSE！！！");
        restart();
    }
    function win(){
        alert("WIN！！！");
        restart();
    }
    function getAnswer(){
        for(var i = 0;i < 4;i++){
            answer[i] = Math.floor(Math.random() * 1000000000 % 10);
            for(var j = 0;j < i;j++){
                if(answer[j] == answer[i]){
                    i--;
                    break;
                }
            }
        }
    }
    function do_restart(){
        container.innerHTML = "";
        chanceleft.innerHTML = "您还有10次机会：";
        img1.src="1.png";
        img2.src="1.png";
        getAnswer();
        chance = 10;
        correct = 0;
    }
    function restart(){
        container.innerHTML += ("<br/><br/>" +"<p align = \"center\"><input type = 'button'    onclick = do_restart() value = '重新开始'/></p>");
    }
    function Reinput(temp){
        alert("请重新输入一个数字互不相同的四位数");
        temp.value = "";
        chance++;
    }
    function change(number){
        var i1 = document.getElementById("img1");
        var i2 = document.getElementById("img2");
        img1.src = number + ".png";
        img2.src = number + ".png";
    }
    function showresult(value,aa,bb){
        chanceleft.innerHTML = ("您还有" + chance + "次机会:");
        container.innerHTML+=("<p align = \"center\" style=\"font-size:20px; color:brown\">"+(10-chance)+":  "+value+"  "+aa+"A"+bb+"B"+"</div>");
        switch(aa+bb){
            case 0:
            case 1:change(1);break;
            case 2:change(2);break;
            case 3:change(3);break;
            case 4:change(4);break;
        }
    }
    function myfunction(name){
        chance--;
        if(chance < 0){
            alert("对不起，游戏已失败，请重新来过");
            return;
        }
        if(correct){
            alert("游戏已胜利，若您还想尝试，请重新来过");
            return;
        }
        var aa,bb;
        var temp = document.getElementById(name);
        var value = temp.value;
        if(value.length != 4 || isNaN(value)){
            Reinput(temp);
            return;
        }
        for(i = 0;i < 4;i++){
            for(j = i + 1;j < 4;j++){
                if(value[i] == value[j]){
                    Reinput(temp);
                    return;
                }
            }
        }
        aa = 0;
        bb = 0;
        //console.log(answer);
        for(i = 0;i < 4;i++){
            for(j = 0 ;j < 4;j++){
                if(Number(value[i]) == answer[j]){
                    if(i == j){
                        aa++;
                        j=4;
                    }
                    else{
                        bb++;
                        j=4;
                    }
                }
            }
        }
        showresult(value,aa,bb);
        temp.value="";
        if(aa == 4){
            correct = 1;
        }
        if(correct==1){
            win();
            return;
        }
        else if(chance == 0){
            lose();
        }
        correct = 0;
    }
    var chance = 10;
    var correct;
    var answer = new Array();
    getAnswer();
    correct = 0;