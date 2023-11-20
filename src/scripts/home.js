import $ from 'jquery';

var activeTab = 1;
const maxValue = 10000000;
const minValue = 100000;

export const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

export const formatterNoDec = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});

export function getInitValues(value, shares, totalShares = 1000000) {
    var ownership = shares / (totalShares + shares);
    var amount = ownership * Number(value);

    if (window.innerWidth < 750) {
        $("#daily").text("$" + formatterNoDec.format(amount / 30));
        $("#weekly").text("$" + formatterNoDec.format(amount / 4));
        $("#monthly").text("$" + formatterNoDec.format(amount));
        $("#yearly").text("$" + formatterNoDec.format(amount * 12));
    } else {
        $("#daily").text("$" + formatter.format(amount / 30));
        $("#weekly").text("$" + formatter.format(amount / 4));
        $("#monthly").text("$" + formatter.format(amount));
        $("#yearly").text("$" + formatter.format(amount * 12));
    }
    return {
        daily: amount / 30,
        weekly: amount / 4,
        monthly: amount,
        yearly: amount * 12,
    };
}

export function onInput(event, callback, callback2, shares = 100, totalShares = 1000000) {
    var value = event.target.value;
    value = value > maxValue ? maxValue : value;
    var ownership = shares / (totalShares + shares);
    var amount = ownership * Number(value);
    if (window.innerWidth < 750) {
        $("#daily").text("$" + formatterNoDec.format(amount / 30));
        $("#weekly").text("$" + formatterNoDec.format(amount / 4));
        $("#monthly").text("$" + formatterNoDec.format(amount));
        $("#yearly").text("$" + formatterNoDec.format(amount * 12));
    } else {
        $("#daily").text("$" + formatter.format(amount / 30));
        $("#weekly").text("$" + formatter.format(amount / 4));
        $("#monthly").text("$" + formatter.format(amount));
        $("#yearly").text("$" + formatter.format(amount * 12));
    }
    callback(value);
    callback2(value);
}

export function calculate(event, callback, callback2, shares = 100, totalShares = 1000000) {
    var value = event.target.value;
    value = value > maxValue ? maxValue : value;
    var ownership = shares / (totalShares + shares);
    var amount = ownership * Number(value);
    if (window.innerWidth < 750) {
        $("#daily").text("$" + formatterNoDec.format(amount / 30));
        $("#weekly").text("$" + formatterNoDec.format(amount / 4));
        $("#monthly").text("$" + formatterNoDec.format(amount));
        $("#yearly").text("$" + formatterNoDec.format(amount * 12));
    } else {
        $("#daily").text("$" + formatter.format(amount / 30));
        $("#weekly").text("$" + formatter.format(amount / 4));
        $("#monthly").text("$" + formatter.format(amount));
        $("#yearly").text("$" + formatter.format(amount * 12));
    }
    callback(value);
    callback2(value);
}

export function setNewNFT(id) {
    switch (id) {
        case 1:
            $("#nft-text").text("COPPER");
            $("#selected-nft").attr("src", "/images/copper.png");
            break;
        case 2:
            $("#nft-text").text("TIN");
            $("#selected-nft").attr("src", "/images/tin.png");
            break;
        case 3:
            $("#nft-text").text("BRONZE");
            $("#selected-nft").attr("src", "/images/bronze.png");
            break;
        case 4:
            $("#nft-text").text("SILVER");
            $("#selected-nft").attr("src", "/images/silver.png");
            break;
        case 5:
            $("#nft-text").text("GOLD");
            $("#selected-nft").attr("src", "/images/gold.png");
            break;
        case 6:
            $("#nft-text").text("PLATINUM");
            $("#selected-nft").attr("src", "/images/platinum.png");
            break;
        case 7:
            $("#nft-text").text("DIAMOND");
            $("#selected-nft").attr("src", "/images/platinum.png");
            break;

    }

    if (window.innerWidth < 1024) {
        RollOut("dropdown-1");
    } else {
        $(`#dropdown-1`).slideToggle(500);
    }
}

export function openDropDown(id) {
    if (window.innerWidth < 1024) {
        RollIn(id);
    } else {
        $(`#${id}`).slideToggle(500);
    }    
}

export function calculateNoSetter(value, shares, totalShares = 1000000) {
    var ownership = shares / (totalShares + shares);
    var amount = ownership * Number(value);    
    $("#daily").text("$" + formatter.format(amount / 30));
    $("#weekly").text("$" + formatter.format(amount / 4));
    $("#monthly").text("$" + formatter.format(amount));
    $("#yearly").text("$" + formatter.format(amount * 52));    
}
export function ScrollToNft(id) {
    var scrollVal = id < 7 ? id + 1 : id;

    if (window.innerWidth <= 1024) {
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
        document.getElementById(`mobilebar`).style.display = "none";

        if (window.innerWidth <= 1024) {
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
            }, 6);
        } else {
            document.getElementById(`${id}`).style.top = "50%";
            $(`#${id}`).fadeIn(500);
        }
    }
    catch (error) {
        console.log(error);
    }
}
export function CloseModal(id) {
    document.body.style.overflow = "visible";
    document.getElementById(`mobilebar`).style.display = "block";

    if (window.innerWidth <= 1024) {
        document.getElementById(`${id}`).style.top = "10%";

        var amount = 10;
        var interval = setInterval(function () {
            document.getElementById(`${id}`).style.top = `${amount}%`;
            amount += 1.5;
            amount = amount >= 100 ? 100 : amount;
            if (amount >= 100) {
                clearInterval(interval);
                document.getElementById(`${id}`).style.display = "none";
            }
        }, 6);
    } else {
        document.getElementById(`${id}`).style.top = "50%";
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
    }, 6);
}

export async function RollOut(id) {
    document.getElementById(`${id}`).style.top = "10%";

    var amount = 10;
    var interval = setInterval(function () {
        document.getElementById(`${id}`).style.top = `${amount}%`;
        amount += 1.5;
        amount = amount >= 100 ? 100 : amount;
        if (amount >= 100) {
            clearInterval(interval);
            document.getElementById(`${id}`).style.display = "none";
        }
    }, 6);
}


export function setMintNFT(id) {
    $("#mint-text").text("COPPER");
    $("#mint-selection").attr("src", "/images/copper.png");

    if (window.innerWidth < 1024) {
        RollOut("dropdown-mint");
    } else {
        $(`#dropdown-mint`).slideToggle(500);
    }
}