for(x=0; x <20 ; ){
    $('#products').append(
        `<tr>
            <th>`+ ++x +`</th>
            <td>Product ` + x +`</td>
            <td>` + Math.floor((Math.random() * 20) + 10) + `</td>
            <td>` + Math.floor((Math.random() * 20) + 1) + `</td>
            <td>
                <button class="btn btn-success">
                    <i class="fa-solid fa-eye"></i>
                </button>
                <button class="btn btn-warning">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btn btn-danger">
                    <i class="fa-solid fa-trash"></i>
                </button>
        
            </td>
        </tr>
        `
    );
}

$(function (){
    $('.btn-danger').click(function (){
        $(this).parent().parent().remove();
        $(this).closest("tr").remove();
    })
});