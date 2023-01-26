import Request from './index'

// 保存发布文章信息
export function ArticlePublic(title,des,tags,editorText){
  return Request.post({
    url:'/article',
    data:{
      title,
      des,
      tags,
      content:editorText
    }
  })
}

// 删除 服务器 图片信息
export function ArticleCover(articleId) {
  return  Request.delete({
    url:"/upload/cover",
    params:{
      articleId
    }
  })
}

// 局部更新 图片 关联的文章 id
export function patchCover(coverId ,articleId ,baseImg) {
  return Request.patch({
    url:'/upload/cover',
    params:{
      coverId,
      articleId,
      baseImg
    }
  })
}
