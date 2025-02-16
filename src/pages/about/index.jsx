import React from 'react'
import { Col,Card,Avatar , Timeline , Row } from 'antd';
import { Typography } from 'antd';
const { Text,Title  } = Typography;



export default function About() {

  const a =    <Card   style={{ minWidth: 300 }}>
                  <Card.Meta
                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                    title="Card title"
                    description={
                      <>
                        <p>This is the description</p>
                        <p>This is the description</p>
                      </>
                    }
                  />
                </Card>
  return (
    <Row gutter={24}>
      <Col className="gutter-row" span={12}>
        <Timeline
          mode={'alternate'}
          items={[
            {
              label: '2015-09-01',
              children: a,
            },
            {
              label: '2015-09-01 09:12:11',
              children: a,
            },
            {
              children: a,
            },
            {
              label: a,
              children: 'Network problems being solved',
            },
          ]}
        />
      </Col>
      <Col className="gutter-row" style={{ fontSize: '18px' }} span={12}>
         <div
          style={{
            display: 'flex',
            justifyContent: 'center', // Centers the image horizontally
          }}
        >
          <img
            alt="example"
            src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            style={{
              // width: '50%',  // Set width to 50% of its parent container
              // height: '50%',  // Let the height adjust to the width to maintain aspect ratio
              overflow:'hidden',
              borderRadius: '10%',  // Make it round
              objectFit: 'cover',  // Ensure the image covers the area without distortion
            }}
          />
        </div>
        <Title level={1} style={{ fontSize: '20px', fontWeight: 'bold' }}>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem inventore minus incidunt a nesciunt, illo ab distinctio quidem. Ex eos ea nulla obcaecati amet, dignissimos corporis accusamus explicabo optio?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id distinctio quasi at vitae quam. Nobis, culpa! Aliquam eos asperiores esse temporibus! Quos aliquid, nihil eum voluptates dolores repudiandae vero tenetur.
      Illum obcaecati inventore expedita officia, quisquam aliquam dolorem ab vitae voluptatum suscipit exercitationem ipsam accusantium quod corporis cumque omnis a, iste fugiat saepe aspernatur tempora nam sequi maiores soluta? Nisi!
      Officia autem explicabo aliquid amet. Molestias ex accusantium hic maiores excepturi dignissimos enim quidem laudantium rem, vitae nisi quis non quas esse obcaecati explicabo dicta! Nisi ratione error maiores quae.
      Voluptates iusto, vero hic voluptate, a esse, voluptatum modi blanditiis explicabo quod maxime repellat mollitia fugit dolore aliquid eligendi inventore temporibus? Delectus ab labore neque modi qui optio ut aspernatur.
      Tempora tenetur sapiente ut porro odit excepturi id? Assumenda necessitatibus rerum provident facilis, atque illum aperiam error distinctio! At fugit repudiandae sequi iure eos aliquid dolores assumenda nemo obcaecati expedita?
      Corrupti consectetur corporis quas! Quasi labore, possimus maxime odit tempora corrupti ducimus aut, maiores, harum ratione corporis voluptatem? Libero adipisci earum doloremque voluptate, minima quia incidunt aliquam commodi? Fuga, nemo!
      Repellendus voluptas quasi consequuntur molestias. Ipsa vel aliquid sunt molestias eum quisquam, tempora, unde praesentium commodi, eos esse adipisci! Labore, alias laudantium sequi repellendus fugiat voluptas a quidem deserunt nesciunt.
      Cupiditate illo dicta voluptatum enim. Expedita provident debitis libero porro necessitatibus eum unde omnis! Tempora neque quis illo accusamus, facere laboriosam incidunt dolor! Quia iure cumque obcaecati! Architecto, consequatur at?
      Atque quia tenetur architecto dolores eos! Iure nobis qui excepturi, recusandae iusto commodi voluptas minima a. Sapiente, accusamus, consequuntur quam, delectus in non iste commodi officiis error ab repellat perferendis?
      Aspernatur explicabo reprehenderit blanditiis repellat tempore repudiandae, ipsa, error, officia culpa deleniti quidem id! Quia aut voluptas rem et asperiores vero ad saepe! Pariatur obcaecati dolores dolore tenetur excepturi inventore?
     </Title>
      </Col>
      </Row>
  )
}
 

