function getUserDetails(id,getUserSubjects){
    console.log("Getting student user id ",id);
    getUserSubjects({userroll: "222"})
}
function getUserSubjects(userRoll,getUserMarks){
    console.log("Getting user subjects by roll number",userRoll);
    getUserMarks({subid: "en-1"});

}
function getUserMarks(userSubId){
    console.log("Getting user subject id ",userSubId);

}
getUserDetails("123",function(userRoll){
    getUserSubjects(userRoll,function(userSubId){
        getUserMarks(userSubId)
    })
});