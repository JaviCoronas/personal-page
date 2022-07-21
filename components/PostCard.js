import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export const PostCard = ({ slug, content }) => {
  return (
        <Card key={slug} css={{ w: "100%", h: "300px", maxW: '1000px', margin: '5px'}}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={18} weight="bold" css={{color: "$primary"}}>
                {content.title}
              </Text>
              <Text h3 color="white">
                {content.metaTitle}
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={content.socialImage}
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Relaxing app background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#0f111466",
              borderTop: "$borderWeights$light solid $gray800",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Row>
                  <Col>
                    <Text color="#d1d1d1" size={12}>
                      {content.author}
                    </Text>
                    <Text color="#d1d1d1" size={12}>
                      {content.time}
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button
                    flat
                    auto
                    rounded
                    color="secondary"
                    css={{ color: "#94f9f0", bg: "#94f9f026"}}
                    onPress={() => router.push('/post/' + slug)}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Leer más
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
  );
}

