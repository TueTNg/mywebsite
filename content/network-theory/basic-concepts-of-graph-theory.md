---
title: "Basic concepts of graph theory"
date: 2017-09-25
---



## Graphs

A **graph** `$G$` is a mathematical object that consists of points and connections between them. The points are called **vertices** or **nodes**, and the connections are called **edges** or **ties**. 

### Vertices and Edges
We denote the set of vertices as `$V$`, the set of edges as `$E$`, and the graph as `$G(V, E)$`. Sometimes, for the clarity purpose, we use subscripted notation `$V_G$` and `$E_G$` to explicitly show that they are the vertex and edge sets of graph `$G$`. We often use lowercase letters such as `$u$` or `$v$` to denote single vertex (`$u, v \in V$`) and `$e$` to denote a single edge (`$e \in E$`). 

### Incident and adjacent
Now let's examine what types of connection can be formed among the vertices and edges of a graph. There are two: adjacent and incident. "Adjacent" is use for *elements* of the same kind (i.e. two vertices or two edges) while "incident" is use for elements of different kinds (i.e. one vertex and one edge). By using the word *elements*, I mean either vertices or edges.

1. A vertex `$u$` is **adjacent** to vertex `$v$` if they are connected by an edge `$e$`. In this case, `$u$` and `$v$` are also called **endpoints** of `$e$`. Similarly, two edges are adjacent to each other if they are connected to the same vertex. Adjacent vertices / edges are called **neighbors** (quite intuitive, right?)
2. A vertex `$u$` is **incident** on an edge `$e$` if `$u$` is an endpoint of `$e$`. We can also says the other way around (`$e$` is incident on `$v$`).

### Loops and multi-edges
Sometimes, the elements can be duplicated. For example, an edge can join a vertex to itself (duplicated endpoints), or there are more than one edge between two vertices (duplicated edges). Therefore, we have to develop more specific terms to describe such cases.

1. If two endpoints are joined by a single edge, then that edge is called a **proper edge**. Conversely, if two endpoints are joined by multiple edges (more than one), then those edges are **multi-edges**. In the latter case, the number of common edges are called **edge-multiplicity**.
2. If two endpoints of an edge are identical (i.e. edge `$e$` joins vertex `$u$` to `$u$` itself), the that edge is a **self-loop** (or simply a **loop**)

The duplication of elements results in different types of graphs.







