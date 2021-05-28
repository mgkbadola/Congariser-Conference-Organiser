function convertDateToString(date){

}
$('#buttonFormAddConference').click(function() {
    let form = document.getElementById("formAddConference");
    let conf_name = form.elements["name"].value;
    let abstract_submission_deadline = form.elements["abstract_submission_deadline"].value;
    let paper_submission_deadline = form.elements["paper_submission_deadline"].value;
    let review_deadline = form.elements["review_deadline"].value;
    let start_date = form.elements["start_date"].value;
    let end_date = form.elements["end_date"].value;
    var today = new Date();
    let month = today.getMonth() + 1 + "";
    let hour = today.getHours() + "";
    if(month.length === 1){
        month = "0" + month;
    }
    let date = today.getFullYear()+'-'+(month)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes();
    var today = date+'T'+time;
    console.log(today);
    console.log(new Date(Date.parse(abstract_submission_deadline)) > new Date());
    if(conf_name === ""){
        alert("Conference name can't be empty.");
        return false;
    }
    if(end_date.localeCompare(start_date) > 0 && start_date.localeCompare(review_deadline) > 0
    && review_deadline.localeCompare(paper_submission_deadline) > 0 && paper_submission_deadline.localeCompare(abstract_submission_deadline) > 0
    && new Date(Date.parse(abstract_submission_deadline)) > new Date()){

        return true;
    }
    else{
        alert('Check the dates you have entered.');
        return false;
    }
});

