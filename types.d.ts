export interface IProject {
  savedWithVersion: number;
  sequences: Array<ISequence>;
}

export interface ISequence {
  id: string;
  name: string;
  nodes: Array<INode>;
  updatedAt: Date;
}

export interface INode {
  id: string;
  name: string;
  lines: Array<INodeLine>;
  responses: Array<INodeResponse>;
  updatedAt: Date;
}

export interface INodeLink {
  id: string;
  goToNodeName?: string;
  goToNodeId?: string;
}

export interface INodeLine {
  id: string;
  comment?: string;
  condition?: string;
  character?: string;
  dialogue?: string;
  mutation?: string;
  goToNodeName?: string;
  goToNodeId?: string | null;
}

export interface INodeResponse {
  id: string;
  condition?: string;
  prompt?: string;
  goToNodeName?: string;
  goToNodeId?: string | null;
}
