var fields = document.querySelectorAll('#form-user-create [name]');
var user = {};

function addLine(dataUser) {



    document.getElementById("table-users").innerHTML = `
                <tr>
                    <td>
                      <img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm">
                    </td>
                    <td>${dataUser.name}</td>
                    <td>${dataUser.email}r</td>
                    <td>${dataUser.admin}</td>
                    <td>${dataUser.data}</td>
                    <td>
                      <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                      <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                    </td>
                </tr>
    
    `;



}

