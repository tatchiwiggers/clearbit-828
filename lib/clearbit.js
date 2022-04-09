const authorization = "Bearer sk_86a1b658937bca29a9aafc4cfe05497e";
// TODO
// 1. selecionar nossos targets (form e email)
// 2. enviar a requisição AJAX para a API utilizando a função fetch() e
// ler o string json (parsear em um obj legivel para o JS) e console.log
// os resultados.
// 3. utilizar o comando preventDefault() para que o
// comportamento padrão do submit seja desativado;
// 4. extrair os tags <td> do nosso HTML do json parseado
// 5. injetar os campos extraídos do objeto retornado dentro do nosso HTML
//6. Chamar nossa função injectData(input) na nossa função findPerson
// PASSANDO O DATA COMO ARGUENTO!!! Linha 31.


// 1. selecionar nossos targets (form e email)
const form = document.querySelector('#clearbitForm');
const input = document.querySelector('#clearbitEmail');

// 2. enviar a requisição AJAX para a API utilizando a função fetch() e
// ler o string json (parsear em um obj legivel para o JS) e console.log
// os resultados.
const findPerson = (email) => {
  const url = `https://person.clearbit.com/v1/people/email/${email}`;
  fetch(url, { 
    headers: { 
      'User-Agent': 'Mozilla/5.0 (Windows NT 5.1; rv:15.0) Gecko/20100101 Firefox/15.0.1',
      Authorization: authorization }})
      .then(response => response.json())
      .then((data) => {
        //   console.log(data);
        injectData(data);
      });
    };
    
// 3. utilizar o comando preventDefault() para que o
// comportamento padrão do submit seja desativado;
form.addEventListener('submit', (event) => {
    event.preventDefault();
    findPerson(input.value);
});

// 4. extrair os tags <td> do nosso HTML do json parseado
const injectData = (element) => {
    const name = document.getElementById('userName');
    const email = document.getElementById('userEmail');
    const bio = document.getElementById('userBio');
    const location = document.getElementById('userLocation');

    // 5. injetar os campos extraídos do objeto retornado dentro do nosso HTML
    name.innerText = element.name.fullName;
    email.innerText = element.email;
    bio.innerText = element.bio;
    location.innerText = element.location
};

//6. Chamar nossa função injectData(input) na nossa função findPerson
// PASSANDO O DATA COMO ARGUENTO!!! Linha 31.
