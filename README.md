# @nathanhoad/saywhat-core

A collection of utilities for working with [SayWhat projects](https://nathanhoad.itch.io/saywhat).

`npm install @nathanhoad/saywhat-core`

## Usage

### Converting Lines/Responses to/from text

- `textToLines` and `linesToText`: Convert the "lines" part of a node to/from its text representation.
- `textToResponses` and `responsesToText`: Convert the "responses" part of a node to/from its text representation.

### Working with Nodes

- `findLinksFromNode`: Get a list of nodes that this node might exit out to.
- `findLinksToNode`: Get a list of nodes that lead to this node.
- `filterNodes`: Filter a list of nodes by matching various properties to a string.
- `getNodesByChildId`: Get a dictionary of lines/responses within a node. The key is the line/response ID and the value is the node.

### Exporting

- `projectToXml` and `projectToResX`: Converts a SayWhat project to XML/ResX for MonoGame, etc.
- `projectToJson`: Converts a SayWhat project JSON structure to a flat JSON array of dialogue objects.
- `projectToTres`: Converts a Saywhat project into a Godot Resource.
