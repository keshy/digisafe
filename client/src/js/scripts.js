// Empty JS for your own code to be here
var login_html = `
        <div class="container-fluid">
            </br>
            <div class="row">
                <div class="col-md-12">
                    <div class="jumbotron" align-items="center">
                        <h3 class="text-center">
                            Brindavanam
                        </h3>
                        <p class="text-center">
                            A private virtual infrastructure for maintaining and sharing sensitive data.
                        </p>
                        <div align="center" class="g-signin2" data-onsuccess="onSignIn"></div>
                    </div>
                    <div id="g_id_onload"
                     data-client_id="864680086079-1rffec4fmn2ceutllo528517i5jr3aae.apps.googleusercontent.com"
                     data-callback="onSuccess">
                    </div>
                    <div id="glogin" class="g_id_signin" data-type="standard"></div>
                </div>
            </div>
        </div>
    `;

var home_html = `
        <div class="container-fluid">
        </br>
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-8">
                        <div class="jumbotron">
                            <h3 class="text-left">
                                Brindavanam
                            </h3>
                            <p>
                                A private virtual infrastructure for maintaining private data.
                            </p>
                        </div>
                    </div>
                    <div id="user-profile-display" class="col-md-4">
                        <address id="user-profile-details">
                        </address>
                        <button type="button" class="btn btn-outline-primary btn-sm" onclick="signOut()">
                            Sign-Out
                        </button>
                    </div>
                </div>
                </br>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active">
                            Home
                        </li>
                        <li class="breadcrumb-item">
                            <a href="./pm.html">Password Manager</a>
                        </li>
                    </ol>
                </nav>
                <div class="row">
                    <div class="col-md-12">
                        <table id="user_summary" class="table table-bordered table-sm">
                            <thead>
                            <tr>
                                <th>
                                    Username
                                </th>
                                <th>
                                    No. saved passwords
                                </th>
                                <th>
                                    Last Accessed
                                </th>
                                <th>
                                    Last Modified
                                </th>
                            </tr>
                            <td id="stats_data"></td>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

function authModule() {
    const authOrigins = ["https://tokenstorage.ropnop.dev", "http://localhost:3000"];
    let token = '';

    this.setToken = (value) => {
        token = value
    }

    this.fetch = (resource, options) => {
        let req = new Request(resource, options);
        destOrigin = new URL(req.url).origin;
        if (token && authOrigins.includes(destOrigin)) {
            req.headers.set('Authorization', token);
        }
        return fetch(req)
    }
}
const auth = new authModule();
function enableSignedInViews() {
    $('#signin_div').hide();
    $('#home').html(home_html);
    $('#home').show();
    $('#signin_div').html('');
    $('#glogin').hide();
}

function onSuccess(response) {
    sessionStorage.setItem('gTokenDigiSafe', response.credential);
    enableSignedInViews();
    console.log('Saved response in closure');
}

function signOut() {
    google.accounts.id.disableAutoSelect();
  }