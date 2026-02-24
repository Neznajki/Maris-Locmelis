
import React, {useEffect, useState} from 'react'
import { PageContainer } from '@/components/PageRenderer'
import { Paragraph } from '@/components/Paragraph'
import Button from "@/components/page/type/Button";
import {PageSection} from "@/contract/PageSection";
import {loadPageDataWithRetry} from "@/data/pageApiLoader";
import {DownloadButtonType} from "@/contract/PageType";

export const AboutMe: React.FC<{ title: React.ReactNode }> = ({ title }) => {
    const [content, setContent] = useState<PageSection>();

    useEffect(() => {
        const load = async () => {
            const response = await loadPageDataWithRetry("/about");

            if (response) {
                setContent(response);
            }
        };

        load();
    }, []);

  if (! content) {
      return;
  }
  return (
    <PageContainer title={title}>
      <div>
          {content.parts[0].contents.map(p => {
              if (!p.content || typeof p.content !== "object") return false;
              const data = p.content as DownloadButtonType;

              return (
                  <Button href={data.href} fileName={data.fileName} content={data.content}/>
              )
          })}
      </div>
      {content.parts[1].contents.map(p => {
          if (!p.content || typeof p.content !== "string") return false;
          return (
              <Paragraph key={p.id}>{p.content}</Paragraph>
          )
      })}
    </PageContainer>
  )
}
export default AboutMe
