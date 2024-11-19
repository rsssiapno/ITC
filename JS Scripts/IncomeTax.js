function incomeTax()
        {
            let userNum = 0, tax = 0;

            userNum = document.getElementById("userNumber").value*1;

            console.log(userNum);

            if(userNum <= 250000)
            {
                tax = 0;
            }
            else if(userNum > 250000 && userNum <= 400000)
            {
                tax = (userNum-250000)*0.20;
            }
            else if(userNum > 400000 && userNum <= 800000)
            {
                tax = 30000 + ((userNum-400000)*0.25);
            }
            else if(userNum > 800000 && userNum <= 2000000)
            {
                tax = 130000 + ((userNum-800000)*0.30);
            }
            else if (userNum > 2000000 && userNum <= 8000000)
            {
                tax = 490000 + ((userNum-2000000)*0.32);
            }
            else
            {
                tax = 2410000 + ((userNum-8000000)*0.35);
            }

            tax = tax.toFixed(2);
            document.getElementById("taxedIncome").value = tax;
        }

function taxEvent()
{
    document.getElementById("userNumber").addEventListener("keyup",()=>
    {
        incomeTax();
    });

    document.getElementById("userName").addEventListener("keypress",()=>
    {
        incomeTax();
    });
}

(() =>
{
    taxEvent();

})();