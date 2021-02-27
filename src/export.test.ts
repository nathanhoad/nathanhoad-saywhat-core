import { v4 as uuid } from "uuid";

import { projectToXml, projectToResx, projectToJson, projectToTres, projectToExportNodesList } from "./export";
import { IProject } from "../types";

describe("projectToXml", () => {
  it("exports", () => {
    expect.hasAssertions();

    expect(projectToXml(PROJECT)).toMatchSnapshot();
  });
});

describe("projectToResX", () => {
  it("exports", () => {
    expect.hasAssertions();

    expect(projectToResx(PROJECT)).toMatchSnapshot();
  });
});

describe("projectToJson", () => {
  it("exports", () => {
    expect.hasAssertions();

    expect(projectToJson(PROJECT)).toMatchSnapshot();
  });
});

describe("projectToTres", () => {
  it("exports", () => {
    expect.hasAssertions();

    expect(projectToTres(PROJECT)).toMatchSnapshot();
  });
});

describe("projectToExportNodesList", () => {
  it("exports", () => {
    expect.hasAssertions();

    expect(projectToExportNodesList(PROJECT)).toMatchSnapshot();
  });
});

const PROJECT: IProject = {
  savedWithVersion: 1.7,
  sequences: [
    {
      id: "seq1",
      updatedAt: new Date(),
      name: "Example Sequence",
      nodes: [
        {
          id: "node1",
          updatedAt: new Date(),
          name: "Start",
          lines: [
            {
              id: "line1",
              character: "Character",
              dialogue: "Hello!"
            },
            {
              id: "line2",
              condition: "has_met_character",
              character: "Character",
              dialogue: "It's nice to meet you."
            },
            {
              id: "line3",
              comment: "This is a comment"
            },
            {
              id: "line4",
              mutation: "has_met_character = true"
            },
            {
              id: "line5",
              condition: "something",
              goToNodeId: "node2",
              goToNodeName: "Second"
            }
          ],
          responses: [
            {
              id: "response1",
              prompt: "Can you repeat that?",
              goToNodeId: "node1",
              goToNodeName: "Start"
            },
            {
              id: "response2",
              condition: "something",
              prompt: "That's all for now",
              goToNodeId: null,
              goToNodeName: "END"
            }
          ]
        },
        {
          id: "node2",
          updatedAt: new Date(),
          name: "Second",
          lines: [],
          responses: [
            {
              id: "response3",
              goToNodeId: "node1",
              goToNodeName: "Start"
            }
          ]
        },
        {
          id: "node3",
          updatedAt: new Date(),
          name: "Third",
          lines: [],
          responses: []
        }
      ]
    }
  ]
};
