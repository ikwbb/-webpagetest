const picNum = 11

ratingAfterSearch = 0;

function g(str){
    return document.getElementById(str)
}

var range = document.getElementById("customRange3")
var rangeLabel = document.getElementById("rangeLabel")

var ratingBar = document.getElementById("ratingBar")
var ratingLabel = document.getElementById("ratingLabel")

var shopHunter = document.getElementById("shopHunter")
var prodHunter = g("productHunter")

var findBS = g("findBS")
var findBF = g("findBF")

function rangeChange(label, bar){
    label.innerHTML = bar.value
}

range.ontouchmove = () => rangeChange(rangeLabel, range)
range.onmousemove = () => rangeChange(rangeLabel, range)

ratingBar.ontouchmove = () => rangeChange(ratingLabel, ratingBar)
ratingBar.onmousemove = () => rangeChange(ratingLabel, ratingBar)



window.addEventListener('load', ()=>{
    range.value = 20
    rangeLabel.innerHTML = range.value

    ratingBar.value = 5
    ratingLabel.innerHTML = ratingBar.value

    

})

/* var toggleFunc = () => {
    shopHunter.classList.toggle("d-none")
} */

findBP.onclick = () => {
    shopHunter.classList.add("d-none")
    prodHunter.classList.remove("d-none")

    findBP.classList.add("active")
    findBS.classList.remove("active")
}

findBS.onclick = () => {
    prodHunter.classList.add("d-none")
    shopHunter.classList.remove("d-none")

    findBS.classList.add("active")
    findBP.classList.remove("active")
}



// Filter Results

var shopName = new Array('James', 'Mary', 'Robert', 'Patricia', 'John', 'Jennifer', 'Michael', 'Linda', 'William', 'Elizabeth', 'David', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica', 'Thomas', 'Sarah', 'Charles', 'Karen', 'Christopher', 'Nancy', 'Daniel', 'Lisa', 'Matthew', 'Betty', 'Anthony', 'Margaret', 'Mark', 'Sandra', 'Donald', 'Ashley', 'Steven', 'Kimberly', 'Paul', 'Emily', 'Andrew', 'Donna', 'Joshua', 'Michelle', 'Kenneth', 'Dorothy', 'Kevin', 'Carol', 'Brian', 'Amanda', 'George', 'Melissa', 'Edward', 'Deborah', 'Ronald', 'Stephanie', 'Timothy', 'Rebecca', 'Jason', 'Sharon', 'Jeffrey', 'Laura', 'Ryan', 'Cynthia', 'Jacob', 'Kathleen', 'Gary', 'Amy', 'Nicholas', 'Shirley', 'Eric', 'Angela', 'Jonathan', 'Helen', 'Stephen', 'Anna', 'Larry', 'Brenda', 'Justin', 'Pamela', 'Scott', 'Nicole', 'Brandon', 'Emma', 'Benjamin', 'Samantha', 'Samuel', 'Katherine', 'Gregory', 'Christine', 'Frank', 'Debra', 'Alexander', 'Rachel', 'Raymond', 'Catherine', 'Patrick', 'Carolyn', 'Jack', 'Janet', 'Dennis', 'Ruth', 'Jerry', 'Maria', 'Tyler', 'Heather', 'Aaron', 'Diane', 'Jose', 'Virginia', 'Adam', 'Julie', 'Henry', 'Joyce', 'Nathan', 'Victoria', 'Douglas', 'Olivia', 'Zachary', 'Kelly', 'Peter', 'Christina', 'Kyle', 'Lauren', 'Walter', 'Joan', 'Ethan', 'Evelyn', 'Jeremy', 'Judith', 'Harold', 'Megan', 'Keith', 'Cheryl', 'Christian', 'Andrea', 'Roger', 'Hannah', 'Noah', 'Martha', 'Gerald', 'Jacqueline', 'Carl', 'Frances', 'Terry', 'Gloria', 'Sean', 'Ann', 'Austin', 'Teresa', 'Arthur', 'Kathryn', 'Lawrence', 'Sara', 'Jesse', 'Janice', 'Dylan', 'Jean', 'Bryan', 'Alice', 'Joe', 'Madison', 'Jordan', 'Doris', 'Billy', 'Abigail')


var districts = g("districts")
var walkingtime = range

// Services
var skincare = g("btn-skincare")
var manicures = g("btn-manicures")
var massage = g("btn-massage")
var pedicure = g("btn-pedicure")
var makeup = g("btn-makeup")

var rating = ratingBar

// Qualifications
var ITECT = g("btn-ITECT")
var CIBTAC = g("btn-CIBTAC")
var CGD = g("btn-CGD")

// Rating
var public = g("btn-public")
var medium = g("btn-medium")
var premium = g("btn-premium")

var pricing = new Array(public, medium, premium)
var qualif = new Array(ITECT, CIBTAC, CGD)
var services = new Array(skincare, manicures, massage, pedicure, makeup)

/* var show$ = new Array()
var showQualif = new Array()
var showServices = new Array()
var showRating = 0
var showTime = 0 */



var results = g("results")


function genResult(){
    var tdistrict = districts.value
    var ttime = walkingtime.value


    var tservices = new Array()
    for(i=0; i<services.length; i++){
        if(services[i].checked == true){
            tservices.push(document.querySelector(`label[for='${services[i].id}']`).innerText.replace("\n", "").trim())
        }
    }


    var trating = rating.value
    ratingAfterSearch = rating.value


    var tprof = new Array()
    for(i=0; i<qualif.length; i++){
        if(qualif[i].checked == true || ran(2) == 0){
            tprof.push(document.querySelector(`label[for='${qualif[i].id}']`).innerText.replace("\n", "").trim())
        }
    }
    if(tprof.length == 0){
        tprof.push(document.querySelector(`label[for='${qualif[0].id}']`).innerText.replace("\n", "").trim())
    }


    var tpricing = ""
    for(i=0; i<pricing.length; i++){
        if(pricing[i].checked == true ){
            tpricing = document.querySelector(`label[for='${pricing[i].id}']`).innerText.replace("\n", "").trim()
        }
    }

    if(tpricing == ""){
        alert("Please at least select one pricing interval!")
        return false
    }
    if(tservices.length == 0){
        alert("Please at least select one service!")
        return false
    }


/*     console.log(tdistrict)
    console.log(ttime)
    console.log(tservices)
    console.log(trating)
    console.log(tprof)
    console.log(tpricing) */

    return showResult(tdistrict, ttime, tservices, trating, tprof, tpricing)
}

function showResult(dist2, time2, serv2, rating2, prof2, price2){
    var name2 = shopName[ran(shopName.length)]
    var pic = 1 + ran(picNum)

    var profStr = prof2.join(", ")
    var servicesStr = serv2.join(", ")

    var timeStr = ran(time2)
    var ratingStr = ran(5 - rating2) + parseInt(rating2)

    var HTML = `
    
    <div class="row">
    <div class="col">

      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="../beautyShopsImg/${pic}.jpg" class="img-fluid rounded-start w-100" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title" id="shop-name">${name2} Beauty</h5>
              <div class="card-text">
                Rating: <span id="r-rating">${ratingStr}/5</span><br>
                Pricing: <span id="r-pricing">${price2}</span><br>
                Professional qualifications: <span id="r-qualification">${profStr}</span><br>
                Services: <span id="r-sercives">${servicesStr}</span><br>
                Walking time: <span id="r-time">Within ${timeStr} minutes</span><br>
                <button type="button" class="btn btn-outline-secondary" onclick="showComments()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    Comments
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

    `;

    return HTML;

    
}


function ran(num){
    return Math.floor(Math.random()*num);
}

var searchBtn = document.getElementById("searchBtn")

searchBtn.onclick = () => {

    var HTML2 = ""


    var repeat = ran(8) + 1
    for(j=0; j<repeat; j++){
        var generatedResult = genResult()
        if(generatedResult == false){
            return
        } else {
            HTML2 += generatedResult
        }
    }

    genResultLabel()
    results.innerHTML += HTML2

    document.getElementsByClassName("accordion-button")[0].click()

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}


function genResultLabel(){
    var resultLabel = `
    <div class="row">
        <div class="col">
            <h1 class="h2">Results:</h1>
        </div>
    </div>   

    `

    results.innerHTML = resultLabel
    
}

var comments = new Array("Good experiences!", "Good!I had a good time using these.", "Love them so much", "It is suitable for me!", "It is a good thing.", "I like it so much!")
var commentModal = new bootstrap.Modal(document.getElementById("commentModal"))
var commentBody = document.getElementById("commentBody")

function showComments(){
    var HTML = ""
    var commentNum = ran(6)+1

    for(i=0; i<=commentNum; i++){
        HTML += `
            <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${shopName[ran(shopName.length)]}</h5>
                <small>${ran(50) + 1} days ago</small>
            </div>
            <p class="mb-1 text-start">Rating: ${parseInt(ratingAfterSearch) + ran(5 - ratingAfterSearch)}/5</p>
            <p class="mb-1 text-start">${comments[ran(comments.length)]}</p>
            </a>
        </div>

        `
    }

    commentBody.innerHTML = HTML

    commentModal.show()
}