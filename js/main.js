function evalgrade() {
    var math = parseInt(document.getElementById("tmath").value);
    var sci =  parseInt(document.getElementById("tscience").value);
    var eng =  parseInt(document.getElementById("tenglish").value);
    var fil =  parseInt(document.getElementById("tfilipino").value);
    var pe =  parseInt(document.getElementById("tpe").value);

    math
    if (math <= 100 && math >= 90)
    {
        document.getElementById("emath").textContent="Excellent";
    }
    else if (math <= 89 && math >= 80)
    {
        document.getElementById("emath").textContent="Good";
    }
    else if (math <= 79 && math >= 70)
    {
        document.getElementById("emath").textContent="Average";
    }
    else if (math <= 69 && math >= 60)
    {
        document.getElementById("emath").textContent="Poor";
    }
    else
    {
        document.getElementById("emath").textContent="Fail";
    }

    sci
    if (sci <= 100 && sci >= 90)
    {
        document.getElementById("escience").textContent="Excellent";
    }
    else if (sci <= 89 && sci >= 80)
    {
        document.getElementById("escience").textContent="Good";
    }
    else if (sci <= 79 && sci >= 70)
    {
        document.getElementById("escience").textContent="Average";
    }
    else if (sci <= 69 && sci >= 60)
    {
        document.getElementById("escience").textContent="Poor";
    }
    else
    {
        document.getElementById("escience").textContent="Fail";
    }

    eng
    if (eng <= 100 && eng >= 90)
    {
        document.getElementById("eenglish").textContent="Excellent";
    }
    else if (eng <= 89 && eng >= 80)
    {
        document.getElementById("eenglish").textContent="Good";
    }
    else if (eng <= 79 && eng >= 70)
    {
        document.getElementById("eenglish").textContent="Average";
    }
    else if (eng <= 69 && eng >= 60)
    {
        document.getElementById("eenglish").textContent="Poor";
    }
    else
    {
        document.getElementById("eenglish").textContent="Fail";
    }

    fil
    if (fil <= 100 && fil >= 90)
    {
        document.getElementById("efilipino").textContent="Excellent";
    }
    else if (fil <= 89 && fil >= 80)
    {
        document.getElementById("efilipino").textContent="Good";
    }
    else if (fil <= 79 && fil >= 70)
    {
        document.getElementById("efilipino").textContent="Average";
    }
    else if (fil <= 69 && fil >= 60)
    {
        document.getElementById("efilipino").textContent="Poor";
    }
    else
    {
        document.getElementById("efilipino").textContent="Fail";
    }

    pe
    if (pe <= 100 && pe >= 90)
    {
        document.getElementById("epe").textContent="Excellent";
    }
    else if (pe <= 89 && pe >= 80)
    {
        document.getElementById("epe").textContent="Good";
    }
    else if (pe <= 79 && pe >= 70)
    {
        document.getElementById("epe").textContent="Average";
    }
    else if (pe <= 69 && pe >= 60)
    {
        document.getElementById("epe").textContent="Poor";
    }
    else
    {
        document.getElementById("epe").textContent="Fail";
    }

    if (math <= 100 && math >= 90 && sci <= 100 && sci >= 90 && pe <= 100 && pe >= 90 && fil <= 100 && fil >= 90 && eng <= 100 && eng >= 90)
    {
        document.getElementById("ranking").textContent="Top Honor Student";
    }
    else if (sci <= 69 && sci >= 0 && pe <= 69 && pe >= 0 && fil <= 69 && fil >= 0 && math <= 69 && math >= 0 && eng <= 69 && eng >= 0)
     {
         document.getElementById("ranking").textContent="Repeater";
     }
    else if ((math <= 100 && math >= 90 && sci <= 100 && sci >= 90 && pe <= 100 && pe >= 90) || (math <= 100 && math >= 90 && sci <= 100 && sci >= 90 && fil <= 100 && fil >= 90) ||(math <= 100 && math >= 90 && sci <= 100 && sci >= 90 && eng <= 100 && eng >= 90) || (math <= 100 && math >= 90 && fil <= 100 && fil >= 90 && pe <= 100 && pe >= 90) || (math <= 100 && math >= 90 && eng <= 100 && eng >= 90 && pe <= 100 && pe >= 90) || (math <= 100 && math >= 90 && fil <= 100 && fil >= 90 && eng <= 100 && eng >= 90) || (fil <= 100 && fil >= 90 && sci <= 100 && sci >= 90 && pe <= 100 && pe >= 90) || (eng <= 100 && eng >= 90 && sci <= 100 && sci >= 90 && pe <= 100 && pe >= 90) || (eng <= 100 && eng >= 90 && sci <= 100 && sci >= 90 && fil <= 100 && fil >= 90) ||(eng <= 100 && eng >= 90 && fil <= 100 && fil >= 90 && pe <= 100 && pe >= 90) )
    {
        document.getElementById("ranking").textContent="Second Honorable Student";
    }
    else
     {
         document.getElementById("ranking").textContent="None";
     }

}

function getName() {
    var getName = prompt("Name:");

    if(getName != null)
    {
        document.getElementById('studname').innerHTML = "Student Name:" + " " + getName;
    }
}