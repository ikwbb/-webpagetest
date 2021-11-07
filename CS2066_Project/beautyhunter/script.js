const picNum = 11

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

    showResult(tdistrict, ttime, tservices, trating, tprof, tpricing)
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
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

    `

    results.innerHTML += HTML

    
}


function ran(num){
    return Math.floor(Math.random()*num);
}

var searchBtn = document.getElementById("searchBtn")

searchBtn.onclick = () => {
    results.innerHTML = ""

    var repeat = ran(20)
    for(j=0; j<5; j++){
        if(genResult() == false){
            break
        }
    }
    document.getElementsByClassName("accordion-button")[0].click()

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}