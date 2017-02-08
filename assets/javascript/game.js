$(document).ready(function(){
//ID elements
	var gameNum = ("#gameNum");
	var point = ("#point");
	var totalScore=("#totalScore");
	var div = $("<div>");
	var div1 = $("<div>");
	var spanW = $("<span>");
	var spanL = $("<span>");

//values
	var wins=0;
	var losses=0;
	var ranNum=null;
	//var addScore = null;
	var Score=0;
	
	var ranScore= Math.floor(Math.random()*120)+19;
	//crystal random values
	var rubyValue= (Math.floor(Math.random()*12)+1);
	console.log(rubyValue);
	var ametValue= (Math.floor(Math.random()*12)+1);
	console.log(ametValue);
	var emerValue= (Math.floor(Math.random()*12)+1);
	console.log(emerValue);
	var sappValue= (Math.floor(Math.random()*12)+1);
	console.log(sappValue);

	$(".ruby").attr("data-crysScore", rubyValue);
	$(".emerald").attr("data-crysScore", emerValue);
	$(".amethyst").attr("data-crysScore", ametValue);
	$(".sapphire").attr("data-crysScore", sappValue);

	//New ranScore
	function newRanScore(){
		ranScore= Math.floor(Math.random()*120)+18;
		rubyValue= (Math.floor(Math.random()*12)+1);
		ametValue= (Math.floor(Math.random()*12)+1);
		emerValue= (Math.floor(Math.random()*12)+1);
		sappValue= (Math.floor(Math.random()*12)+1);
		$(".ruby").attr("data-crysScore", rubyValue);
		$(".emerald").attr("data-crysScore", emerValue);
		$(".amethyst").attr("data-crysScore", ametValue);
		$(".sapphire").attr("data-crysScore", sappValue);

	};
	
	function print(){
		div.text(Score);
		$("#totalScore").append(div);
		div1.text(ranScore);
		$("#gameNum").append(div1);
		spanW.text(wins);
		$("#wins").append(spanW);
		spanL.text(losses);
		$("#losses").append(spanL);
	};
	
	newRanScore();
	print();

	//create new span for gameNum
	$(".crystal").on("click", function() {
		var addScore = Number($(this).attr("data-crysScore"));
		console.log(addScore);
		console.log(typeof addScore);
		Score = addScore + Score;	
		console.log(Score);
		//display();
		div.text(Score);
		$("#totalScore").append(div);

		if (Score===ranScore){
			wins++;
			Score=0;
			$("#text").text("You won!");
			newRanScore();
			print();
		}
		else if(Score>ranScore){
			losses++;
			Score=0;
			$("#text").text("You lost!")
			newRanScore();
			print();
		}
	});

	//create new span for point 


	//create new span for totalScore



	//end of code
});
