import React, { Component } from 'react';
import styled from 'styled-components';

const DashboardPage = styled.section`
  margin-top: 8rem;
  padding: 2rem;
`;

const DashboardElement = styled.div`
  border: 1px solid ${props => props.theme.colors.colorBlack};
  padding: 1rem;
  margin-bottom: 1rem;
`;

class Dashboard extends Component {
  render() {
    return (
      <DashboardPage>
        <DashboardElement>
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            explicabo, beatae hic nobis quae veritatis doloribus aliquam ullam
            tempore eaque cupiditate, earum odio nesciunt optio qui aspernatur
            amet corporis omnis voluptas excepturi! Consequuntur expedita harum,
            accusantium molestiae excepturi esse accusamus facilis omnis officia
            tempora aperiam nihil totam praesentium labore exercitationem aut
            laudantium ducimus quis optio dignissimos minus eum. Soluta itaque
            aliquid ipsam quasi aut, incidunt, reprehenderit quia voluptate
            eaque ad ex cum vitae unde non distinctio neque dolor dolore
            dolorem.
          </p>
        </DashboardElement>
        <DashboardElement>
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            explicabo, beatae hic nobis quae veritatis doloribus aliquam ullam
            tempore eaque cupiditate, earum odio nesciunt optio qui aspernatur
            amet corporis omnis voluptas excepturi! Consequuntur expedita harum,
            accusantium molestiae excepturi esse accusamus facilis omnis officia
            tempora aperiam nihil totam praesentium labore exercitationem aut
            laudantium ducimus quis optio dignissimos minus eum. Soluta itaque
            aliquid ipsam quasi aut, incidunt, reprehenderit quia voluptate
            eaque ad ex cum vitae unde non distinctio neque dolor dolore
            dolorem.
          </p>
        </DashboardElement>
        <DashboardElement>
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            explicabo, beatae hic nobis quae veritatis doloribus aliquam ullam
            tempore eaque cupiditate, earum odio nesciunt optio qui aspernatur
            amet corporis omnis voluptas excepturi! Consequuntur expedita harum,
            accusantium molestiae excepturi esse accusamus facilis omnis officia
            tempora aperiam nihil totam praesentium labore exercitationem aut
            laudantium ducimus quis optio dignissimos minus eum. Soluta itaque
            aliquid ipsam quasi aut, incidunt, reprehenderit quia voluptate
            eaque ad ex cum vitae unde non distinctio neque dolor dolore
            dolorem.
          </p>
        </DashboardElement>
      </DashboardPage>
    );
  }
}

export default Dashboard;
