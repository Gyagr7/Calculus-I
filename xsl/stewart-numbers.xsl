<?xml version="1.0" encoding="UTF-8"?>
<!--
  Make the book's chapter and section numbers match Stewart (8th ed.).

  PreTeXt counts divisions 1, 2, 3, ... and has no per-division number
  override, so this file overrides the counting rule itself.  It is
  <xsl:include>d by the target stylesheets (stewart-html.xsl, ...).

  * Sections named  sec-<chapter>-<section>-<slug>  take their number from
    the id, so sec-5-3-ftc is "5.3" no matter what comes before it in the book.
  * Chapters are numbered from the table below (by xml:id).
  * Everything else (the P and R sections) falls back to PreTeXt's normal count.

  To renumber something later, edit the table or rename the xml:id.
-->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

  <xsl:template match="chapter" mode="division-serial-number">
    <xsl:choose>
      <!-- Not in Stewart: P = pre-assignments, R = derivatives review -->
      <xsl:when test="@xml:id = 'ch-pre-assignments'">P</xsl:when>
      <xsl:when test="@xml:id = 'ch-derivatives-recap'">R</xsl:when>
      <!-- Stewart chapters (8th ed.) -->
      <xsl:when test="@xml:id = 'ch-optimization-approximation'">4</xsl:when>
      <xsl:when test="@xml:id = 'ch-integrals'">5</xsl:when>
      <xsl:when test="@xml:id = 'ch-applications-of-integration'">6</xsl:when>
      <xsl:when test="@xml:id = 'ch-further-applications-of-integration'">8</xsl:when>
      <xsl:otherwise>
        <xsl:message>PTX:WARNING: stewart-numbers.xsl has no number for chapter "<xsl:value-of select="@xml:id"/>"; using the default count.</xsl:message>
        <xsl:apply-imports/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template match="section" mode="division-serial-number">
    <xsl:variable name="rest"  select="substring-after(@xml:id, 'sec-')"/>
    <xsl:variable name="ch"    select="substring-before($rest, '-')"/>
    <xsl:variable name="after" select="substring-after($rest, '-')"/>
    <xsl:variable name="sec"   select="substring-before($after, '-')"/>
    <xsl:choose>
      <xsl:when test="starts-with(@xml:id, 'sec-') and string(number($ch)) != 'NaN' and string(number($sec)) != 'NaN'">
        <!-- Safety net: the chapter digit in the id must match the chapter's number. -->
        <xsl:variable name="chap-number">
          <xsl:apply-templates select="parent::chapter" mode="division-serial-number"/>
        </xsl:variable>
        <xsl:if test="not($chap-number = $ch)">
          <xsl:message>PTX:WARNING: section "<xsl:value-of select="@xml:id"/>" is named for chapter <xsl:value-of select="$ch"/> but sits in chapter <xsl:value-of select="$chap-number"/>.</xsl:message>
        </xsl:if>
        <xsl:value-of select="$sec"/>
      </xsl:when>
      <xsl:otherwise>
        <xsl:apply-imports/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

</xsl:stylesheet>
