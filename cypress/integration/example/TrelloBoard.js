///<reference types="Cypress"/>
///<reference types="@cypress/xpath"/>

describe('Trello API', () => {
  var APIToken= "ATTA7874a99a5f662e9fa8ace7eb4490896f82e15fd98396bbf0c641c6b16e89a16e1B80DBF4"
  var APIKey= "86f3034d17832da3f020f687328bf0f3"
  var id;
  it('Create a BOARD', () => {
    cy.request({
      method: "POST",
      url: `https://api.trello.com/1/boards/?name=TestingBoard&key=${APIKey}&token=${APIToken}`,
      headers: {
        accept: "application/json"
      },
    }).then((response)=>{
      expect(response.status).to.eql(200)
      id = response.body.id
    })
  });

  it('Update a BOARD', () => {
    cy.request({
      method: "PATCH",
      url: `https://api.trello.com/1/boards/${id}?key=${APIKey}&token=${APIToken}`,
      headers: {
        accept: "application/json"
      },
      body: data,
    }).then((res) => {
      expect(res.status).to.eql(200);
      let body = JSON.stringify(res.body);
      cy.log(body);
    });
  });

  it.skip('Delete a BOARD', () => {
    cy.request({
      method: "DELETE",
      url: `https://api.trello.com/1/boards/${id}?key=${APIKey}&token=${APIToken}`,
      headers: {
        accept: "application/json"
      },
    }).then((response)=>{
      expect(response.status).to.eql(200)
    })
  });
});