import { ASTNode, SectionItem } from '../types';

export function getSectionItems(listNode: ASTNode): SectionItem[] {
  return listNode.children.map(listItemNode => {
    const { children } = listItemNode.children[0];
    let title = '';
    let i: number;
    let commitLink;
    for (i = 0; i < children.length; i++) {
      const node = children[i];
      if (node.type === 'Link') {
        commitLink = node;
        break;
      }
      switch (node.type) {
        case 'Strong':
          title += `*${node.children[0].value}*`;
          break;
        default:
          title += node.value;
      }
    }
    const [closesIssue, issueLink] = children.slice(2);
    const sectionItem: SectionItem = { title, commitLink };
    const isLinkedToIssue = closesIssue && closesIssue.value && closesIssue.value.includes('closes');
    if (isLinkedToIssue) {
      sectionItem.issueLink = issueLink;
    }

    return sectionItem;
  });
}
