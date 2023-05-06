import {
  MdOutlineArticle,
  MdOutlineWeb,
  MdOutlineNavigation,
} from "react-icons/md";
export default (S) =>
  S.list()
    .title("CONTENT")
    .items([
      S.listItem().id("setting").title("Site Setting").icon(MdOutlineNavigation).child(
        S.editor().title("Site Setting").id("setting").schemaType("setting").documentId("singleton-setting")
      ),
      S.documentTypeListItem("year").title("Year").icon(MdOutlineWeb),
      S.documentTypeListItem("teacher").title("Teacher").icon(MdOutlineWeb),
      S.documentTypeListItem("subject").title("Subject").icon(MdOutlineWeb),
      S.documentTypeListItem("laws").title("Laws").icon(MdOutlineWeb),
      S.documentTypeListItem("event").title("Event").icon(MdOutlineWeb),
      S.documentTypeListItem("category").title("Category").icon(MdOutlineWeb),
      S.documentTypeListItem("article").title("Article").icon(MdOutlineArticle),
      S.documentTypeListItem("page").title("Page").icon(MdOutlineWeb),
      S.listItem().id("navigation").title("Navigation").icon(MdOutlineNavigation).child(
        S.editor().title("Navigation").id("navigation").schemaType("navigation").documentId("singleton-navigation")
      ),
    ]);
