import { Context, h, Schema } from 'koishi'

export const name = 'like-me'

export interface Config {
  times: number
}

export const Config: Schema<Config> = Schema.object({
  times: Schema.natural().description('点赞次数').default(10)
})

export function apply(ctx: Context, cfg: Config) {
  ctx.command('like-me', '为你点赞')
    .alias('赞我')
    .action(({ session }) => {
      const like = '👍'.repeat(cfg.times)
      return `${h.quote(session.messageId)}${like}<br/>给你赞了${cfg.times}下哦，记得回我~`
    })
}