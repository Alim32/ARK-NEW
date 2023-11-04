import $ from 'jquery';

var activeTab = 1;

export function ScrollToNft(id) {
    var scrollVal = id < 7 ? id + 1 : id;

    if (window.innerWidth < 1250) {
        scrollVal = id;
    }

    document.getElementById("nft" + scrollVal).scrollIntoView({ behavior: "smooth", block: "end" });

    if (id == activeTab) { return; }
    document.getElementById("nfttab" + activeTab).classList.remove("active");
    document.getElementById("nfttab" + id).classList.add("active");
    activeTab = id;
}

export function OpenModal(id) {
    try {
        document.body.style.overflow = "hidden";
        document.getElementById(`${id}overlay`).style.display = "block";

        if (window.innerWidth < 1250) {                  
            document.getElementById(`${id}`).style.top = "100%";
            document.getElementById(`${id}`).style.display = "block";

            var amount = 100;
            var interval = setInterval(function () {
                document.getElementById(`${id}`).style.top = `${amount}%`;
                amount -= 1.5;
                amount = amount <= 10 ? 10 : amount;
                if (amount <= 10) {
                    clearInterval(interval);
                }
            }, 7);
        } else {
            $(`#${id}`).fadeIn(500);
        }
    }
    catch(error) {
        console.log(error);
    }
}
export function CloseModal(id) {
    document.body.style.overflow = "visible";    

    if (window.innerWidth < 1250) {
        document.getElementById(`${id}`).style.top = "5%";

        var amount = 10;
        var interval = setInterval(function () {
            document.getElementById(`${id}`).style.top = `${amount}%`;
            amount += 1.5;
            amount = amount >= 100 ? 100 : amount;
            if (amount >= 100) {
                clearInterval(interval);
                document.getElementById(`${id}`).style.display = "none";
            }
        }, 7);
    } else {
        $(`#${id}`).fadeOut(500);        
    }

    setTimeout(function () { document.getElementById(`${id}overlay`).style.display = "none"; }, 500);
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function FadeOut(id) {
    document.getElementById(id).style.opacity = 0.9;
    await sleep(50);
    document.getElementById(id).style.opacity = 0.8;
    await sleep(50);
    document.getElementById(id).style.opacity = 0.7;
    await sleep(50);
    document.getElementById(id).style.opacity = 0.6;
    await sleep(50);
    document.getElementById(id).style.opacity = 0.5;
    await sleep(50);
    document.getElementById(id).style.opacity = 0.4;
    await sleep(50);
    document.getElementById(id).style.opacity = 0.2;
    await sleep(50);
    document.getElementById(id).style.display = "none";
}

export async function FadeIn(id) {
    document.getElementById(id).style.opacity = 0.2;
    document.getElementById(id).style.display = "block";
    await sleep(50);
    document.getElementById(id).style.opacity = 0.4;
    await sleep(50);
    document.getElementById(id).style.opacity = 0.5;
    await sleep(50);
    document.getElementById(id).style.opacity = 0.6;
    await sleep(50);
    document.getElementById(id).style.opacity = 0.7;
    await sleep(50);
    document.getElementById(id).style.opacity = 0.8;
    await sleep(50);
    document.getElementById(id).style.opacity = 0.9;
    await sleep(50);
    document.getElementById(id).style.opacity = 1.0;
}

export async function RollIn(id) {
    document.getElementById(id).style.height = "20%";
    document.getElementById(id).style.display = "block";
    await sleep(50);
    document.getElementById(id).style.height = "40%";
    await sleep(50);
    document.getElementById(id).style.height = "50%";
    await sleep(50);
    document.getElementById(id).style.height = "60%";
    await sleep(50);
    document.getElementById(id).style.height = "70%";
    await sleep(50);
    document.getElementById(id).style.height = "80%";
    await sleep(50);
    document.getElementById(id).style.height = "90%";
    await sleep(50);
    document.getElementById(id).style.height = "100%";
}