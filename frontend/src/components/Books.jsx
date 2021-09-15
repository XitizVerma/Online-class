import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
function Books() {
  return (
    <div>
      <center><h2>Recommended Books</h2></center>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <Card style={{height:'450px',marginTop:'1%'}}>
          <Image src='/Images/book1.png' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Introduction to Algorithms</Card.Header>
            <a href="https://www.amazon.in/Introduction-Algorithms-3Ed-International-Press/dp/0262533057">Amazon Link</a>
          </Card.Content>
        </Card>

        <Card style={{height:'450px'}}>
          <Image src='/Images/book2.png' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Java: The complete reference</Card.Header>
            <a href="https://www.amazon.in/Java-Complete-Reference-Herbert-Schildt/dp/9339212096/">Amazon link</a>
          </Card.Content>
        </Card>

        <Card style={{height:'400px'}}>
          <Image src='/Images/book3.png' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Introduction to Operating System</Card.Header>
            <a href="https://www.amazon.in/Operating-System-Concepts-Wiley-Student/dp/0470233990/ref=sr_1_1?dchild=1&qid=1626529259&refinements=p_lbr_books_authors_browse-bin%3APeter+Baer+Galvin&s=books&sr=1-1">Amazon Link</a>
          </Card.Content>
        </Card>

        <Card style={{height:'400px'}}>
          <Image src='/Images/book4.png' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Introduction to DBMS</Card.Header>
            <a href="https://www.amazon.in/Database-Management-Systems-Rajiv-Chopra/dp/9385676342/ref=pd_lpo_1?pd_rd_i=9385676342&psc=1">Amazon Link</a>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}

export default Books;
