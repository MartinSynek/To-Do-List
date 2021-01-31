var notdoneid = 0;

$(document).ready(function () {
    $("#add").click(function () {
        id = notdoneid++;
        list = $("#notdone").html();
        list += "<div id='" + id + "'><input type='checkbox' id='" + id + "_checkbox'><input id='" + id + "_text' type='text' readonly value='" + $("#input").val() + "'><button class='edit' id='" + id + "_edit'>Edit</button><button class='delete' id='" + id + "_delete' style='display:none'>Delete</button></div>";
        $("#notdone").html(list);
    });

    $("#notdone").on('click', '.edit', function () {
        textid = "#" + $(this).parent().attr("id") + "_text";
        if ($(textid).is("[readonly]"))
            $(textid).prop("readonly", false);
        else
            $(textid).prop("readonly", true);
    });

    $("#notdone, #done").on('click', ':checkbox', function () {
        parentid = "#" + $(this).parent().attr("id");
        checkboxid = "#" + $(this).parent().attr("id") + "_checkbox";
        deleteid = "#" + $(this).parent().attr("id") + "_delete";
        editid = "#" + $(this).parent().attr("id") + "_edit";
        if($(checkboxid).prop("checked") == true)
        {
            $(parentid).appendTo("#done");
            $(deleteid).show();
            $(editid).hide();
        }
        else
        {
            $(parentid).appendTo("#notdone");
            $(deleteid).hide();
            $(editid).show();
        }
    });

    $("#done").on('click', '.delete', function () {
        parentid = "#" + $(this).parent().attr("id");
        $(parentid).remove();
    });
});