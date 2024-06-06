function generateRoutine() {
	const days =document.getElementById("days-select").value;
const routineDiv = document . getElementById("routine");
routineDiv.innerHTML='';

if(days === '')  {
	routineDiv.innerHTML='please select the number of days.';
	return;
}
const exercises ={
	chest:['Bench press','Incline Dumbbell press','Chest Fly'],
	back:['Pull-ups','Deadlift','Bent-over Row'],
	Legs:['Squats','Leg Press','Lunges',],
	Shoulders:['Shoulder Press','Lateral Raise','Front Raise'],
	arms:['Bisep curls','Triceps Dips','Hammer Curls']
};
const daysArray=['Monday','Wednesday','Friday','Saturday','Sunday'];
let workoutplan='';

for(let i=0; i<days;i++){
	workoutplan +=`<h2>${daysArray[i]}</h2>`;
	workoutplan +='<ul>';

	for (let muscleGroup in exercises){
		const randomExercises =
		exercises[muscleGroup][Math.floor(Math.random()*
		exercises[muscleGroup].length)];
		   workoutplan +=`<li>${randomExercises}(${muscleGroup})</li>`;
	}
	workoutplan += '</ul>';
}
 routineDiv.innerHTML=workoutplan;
}