import { ASTNode, SectionItem } from '../types';

export function getSectionItems(listNode: ASTNode): SectionItem[] {
  return listNode.children.map(listItemNode => {
    const [title, commitLink, closesIssue, issueLink] = listItemNode.children[0].children;
    const sectionItem: SectionItem = {
      title: title.value,
      commitLink: commitLink
    };
    const isLinkedToIssue = closesIssue.value.includes('closes');
    if (isLinkedToIssue) {
      sectionItem.issueLink = issueLink;
    }

    return sectionItem;
  });
}
